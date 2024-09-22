import React, { useEffect, useState } from 'react';
import { Address, formatEther, parseEther } from 'viem';
import { useQuery } from '@apollo/client';
import { getThingsQuery } from './queries.js';
import { AccountImage } from '../AccountImage.js';
import { Tag } from './Tag.js';
import { useMultiVault } from './intuition-react/useMultiVault.js';

export const Home: React.FC = () => {
  const [currentUrl, setCurrentUrl] = useState<string | undefined>(undefined);
  const [account, setAccount] = useState<Address | undefined>(undefined);
  const { multivault, client } = useMultiVault(account);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const url = tabs[0]!.url;
      const cleanUrl = url?.endsWith('/') ? url?.slice(0, -1) : url;
      setCurrentUrl(cleanUrl);
    });
  }, []);

  useEffect(() => {
    const cachedAccount = localStorage.getItem('account');
    if (cachedAccount) {
      setAccount(cachedAccount as Address);
    }
  }, []);

  const { data, error, refetch } = useQuery(getThingsQuery, {
    variables: {
      url: currentUrl,
      address: account,
    },
    skip: !currentUrl,
  });

  const openAtom = (id: number) => {
    chrome.tabs.create({ url: `https://i7n.app/a/${id}` });
  };




  if (error) {
    return <div className="text-red-500">{error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const thing = data.things.items[0];
  const usd = data.chainlinkPrices.items[0].usd;

  if (!thing) {
    return <h1 className="text-xl dark:text-slate-400 mt-4">No data found for this URL</h1>;
  }

  const myPosition = thing.atom.vault.myPosition?.items[0]?.shares;
  const myPositionInEth = parseFloat(formatEther(BigInt(myPosition || 0))) * parseFloat(formatEther(BigInt(thing.atom.vault.currentSharePrice)));
  const totalStaked = parseFloat(formatEther(BigInt(thing.atom.vault.totalShares)))
    * parseFloat(formatEther(BigInt(thing.atom.vault.currentSharePrice)));

  const tags = thing.atom.asSubject?.items.filter((item) => item.predicate.id === '4') || [];
  const numberOfRemainingPositions = thing.atom.vault.positionCount <= 5 ? '' : `+${thing.atom.vault.positionCount - 5}`;

  const handleAtomClick = (atomId: number) => {
    if (myPosition) {
      redeem(atomId);
    } else {
      deposit(atomId);
    }
  };

  const deposit = async (atomId: number) => {
    try {
      let account: `0x${string}` | undefined = localStorage.getItem('account') as `0x${string}` | undefined;
      if (!account) {
        const accounts = await client?.requestAddresses();
        account = accounts?.[0];
        if (!account) {
          throw new Error('No account found');
        }
        localStorage.setItem('account', account);
      }
      setAccount(account);

      console.log(`Depositing for atom ${atomId} from account ${account}`);

      const { hash } = await multivault.depositAtom(BigInt(atomId), parseEther('0.00042'));
      console.log(`Transaction hash: ${hash}`);

      // wait 1 second before refetching and updating the UI 
      setTimeout(() => {
        refetch();
      }, 1000);
    } catch (error: any) {
      console.log('Error during deposit:', error.message);
    }
  };

  const redeem = async (atomId: number) => {
    try {
      const { hash } = await multivault.redeemAtom(BigInt(atomId), BigInt(myPosition));
      console.log(`Transaction hash: ${hash}`);
      setTimeout(() => {
        refetch();
      }, 1000);
    } catch (error: any) {
      console.log('Error during redeem:', error.message);
    }
  };

  return (
    <div className="bg-slate-950 p-2">
      <div className="flex flex-col p-4 bg-slate-900 rounded-lg">
        <div className="flex items-center space-x-4 mb-3">
          {thing.image && <img src={thing.image} className="w-16 h-16 rounded-full object-cover object-center" />}
          <div>
            <h2 className="text-xl font-bold text-slate-200">{thing.name}</h2>
            <p className="">
              <button onClick={() => openAtom(thing.atomId)} className="text-xs text-slate-600 hover:text-slate-400">
                did:i7n:84532:{thing.atomId}
              </button>
            </p>
          </div>
        </div>
        <p className="text-sm text-slate-300 mt-2">{thing.atom.value?.thing?.description}</p>
        <div className="flex flex-row mt-3 space-x-1">
          <button
            title={`Total staked: ${totalStaked.toFixed(6)} ETH (${(totalStaked * usd).toFixed(2)} USD) by ${thing.atom.vault.positionCount - 1} accounts \n My position: ${myPositionInEth.toFixed(6)} ETH (${(myPositionInEth * usd).toFixed(2)} USD)`}
            onClick={() => handleAtomClick(thing.atomId)}
            className={`space-x-1 flex flex-row items-center border border-slate-800 hover:bg-slate-700 text-green-100 text-xs p-1 px-2 rounded-full ${myPosition ? 'bg-slate-800' : 'bg-transparent'}`}>
            <span className="text-sm">✓</span>
            <div className="flex flex-row mr-3">
              {thing.atom.vault.positions?.items.filter((position) => position.account.type === 'Default').map((position) => (
                <div style={{ marginRight: '-6px' }}
                  key={position.account.id}>
                  <AccountImage
                    id={position.account.id as `0x${string}`}
                    image={position.account.image} />
                </div>
              ))}
            </div>
            <span className="pl-2">{numberOfRemainingPositions}</span>
          </button>
        </div>
        <div className="flex flex-row flex-wrap gap-2 mt-3 space-x-1 border-t border-slate-800 pt-3">
          {tags?.length > 0 && (tags.map((tag, index) => (
            <Tag key={index} tag={tag} account={account} />
          ))
          )}
          <button className="flex items-center border border-slate-800 text-slate-100 hover:border-slate-700 hover:bg-slate-700 hover:text-slate-200 text-xs rounded-full space-x-2 px-2 h-7 bg-transparent">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};