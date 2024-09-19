import React, { useEffect, useState } from 'react';
import { formatEther, parseEther } from 'viem';
import { useQuery } from '@apollo/client';
import { EthMultiVaultAbi } from './abi.js';
import { getThingsQuery } from './queries.js';
import { client, publicClient } from './clients.js';

export const App: React.FC = () => {
  const [currentUrl, setCurrentUrl] = useState<string | undefined>(undefined);

  const [account, setAccount] = useState<string | null>(null);
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
      setAccount(cachedAccount);
    }
  }, []);

  const { data, error, refetch } = useQuery(getThingsQuery, {
    variables: {
      url: currentUrl,
    },
  });

  const openAtom = (id: number) => {
    chrome.tabs.create({ url: `https://i7n.app/a/${id}` });
  };

  const deposit = async (atomId: number) => {
    try {
      let account: `0x${string}` | null = localStorage.getItem('account') as `0x${string}` | null;
      if (!account) {
        const accounts = await client.requestAddresses();
        account = accounts[0];
        if (!account) {
          throw new Error('No account found');
        }
        localStorage.setItem('account', account);
      }
      setAccount(account);

      console.log(`Depositing for atom ${atomId} from account ${account}`);


      const hash = await client.writeContract({
        account: account,
        abi: EthMultiVaultAbi,
        address: '0x430BbF52503Bd4801E51182f4cB9f8F534225DE5',
        functionName: 'depositAtom',
        args: [account, BigInt(atomId)],
        value: parseEther('0.00042'),
      });


      console.log(`Transaction hash: ${hash}`);

      const receipt = await publicClient.waitForTransactionReceipt({ hash });
      console.log('Transaction receipt:', receipt);
      // wait 1 second before refetching and updating the UI 
      setTimeout(() => {
        refetch();
      }, 1000);
    } catch (error) {
      console.error('Error during deposit:', error);
    }
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

  const totalStaked = parseFloat(formatEther(BigInt(thing.atom.vault.totalShares)))
    * parseFloat(formatEther(BigInt(thing.atom.vault.currentSharePrice)));

  const tags = thing.atom.asSubject?.items.filter((item) => item.predicate.id === '4') || [];

  return (
    <div className="bg-slate-950 p-4">
      <div className="flex flex-col p-4 bg-slate-700 rounded-lg" style={{ backgroundImage: `url(../images/bg.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="flex items-center space-x-4 mb-3">
          {thing.image && <img src={thing.image} className="w-16 h-16 rounded-full object-cover object-center" />}
          <div>
            <h2 className="text-xl font-bold text-slate-200">{thing.name}</h2>
            <p className="text-sm text-slate-400">ID: {thing.atomId}</p>
          </div>
        </div>
        <p className="text-sm text-slate-300 mt-2">{thing.atom.value?.thing?.description}</p>
      </div>

      <div className="bg-slate-800 divide-y divide-slate-700 rounded-lg mt-2">
        <div className="flex items-center justify-between p-4 shadow-sm mt-1">
          <div className="flex items-center justify-between w-full">
            <span className="flex items-center">
              <span className="flex flex-col">
                <span className="text-md dark:text-slate-300">Staked</span>
                <span className="text-xs dark:text-slate-400">Holders: {thing.atom.vault.positionCount}</span>
              </span>
            </span>
            <div className="flex-grow flex justify-center"></div>
            <span className="flex flex-col items-end">
              <span className="text-slate-500 dark:text-slate-400 text-sm" title={`${totalStaked.toFixed(6)} ETH`}>
                {(totalStaked * usd).toFixed(2)} USD
              </span>
            </span>
          </div>
        </div>
      </div>

      {tags?.length > 0 && (
        <>
          <h1 className="text-xl dark:text-slate-400 mt-4">Tags</h1>
          <div className="bg-slate-800 divide-y divide-slate-700 rounded-lg mt-2">
            {tags.map((tag, index) => {
              const tagTotalStaked = (
                parseFloat(formatEther(BigInt(tag.vault.currentSharePrice))) *
                parseFloat(formatEther(BigInt(tag.vault.totalShares))) +
                parseFloat(formatEther(BigInt(tag.counterVault.currentSharePrice))) *
                parseFloat(formatEther(BigInt(tag.counterVault.totalShares))
                ));

              return (
                <div key={index} className="flex items-center justify-between p-4 shadow-sm mt-1" >
                  <div className="flex items-center justify-between w-full">
                    <span className="flex items-center">
                      {tag.object.image && <span className="mr-4">
                        <img src={tag.object.image} className="min-w-6 w-6 h-6 rounded-full object-cover object-center" />
                      </span>}
                      <span className="flex flex-col">
                        <span className="text-md dark:text-slate-300">{tag.object.label}</span>
                        <span className="text-xs dark:text-slate-400">
                          Holders: {tag.vault.positionCount.toString()}
                          {tag.counterVault.positionCount ? `, against: ${tag.counterVault.positionCount.toString()}` : ""}
                        </span>
                      </span>
                    </span>
                    <div className="flex-grow flex justify-center"></div>
                    <span className="flex flex-col items-end">
                      <span className="text-slate-500 dark:text-slate-400 text-sm" title={tagTotalStaked.toFixed(6)}>
                        {(tagTotalStaked * usd).toFixed(2)} USD
                      </span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      <div className="mt-4">
        <p className="text-slate-400">Account: {account}</p>
      </div>
      <div className="mt-4">
        <button onClick={() => openAtom(thing.atomId)} className="text-white py-2 px-4 mr-4">
          Details
        </button>
        <button onClick={() => deposit(thing.atomId)} className="text-white py-2 px-4">
          Deposit
        </button>
      </div>
    </div>
  );
};
