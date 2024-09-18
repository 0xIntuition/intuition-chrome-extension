import React, { useEffect, useState } from 'react';
import { formatEther, parseEther } from 'viem';
import { EthMultiVaultAbi } from './abi.js';
import { GraphQLResponse } from './types.js';
import { getThingsQuery } from './queries.js';
import { client, publicClient } from './clients.js';

export const App: React.FC = () => {
  const [data, setData] = useState<GraphQLResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [refetch, setRefetch] = useState<boolean>(true);

  useEffect(() => {
    if (refetch) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentUrl = tabs[0].url;
      if (currentUrl) {
        fetchGraphQLData(currentUrl);
      }
      });
      setRefetch(false);
    }
  }, [refetch]);

  const fetchGraphQLData = async (url: string) => {
    try {
      const cleanUrl = url.endsWith('/') ? url.slice(0, -1) : url;
      const response = await fetch('https://i7n.app/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: getThingsQuery,
          variables: { url: cleanUrl },
        }),
      });

      const data: GraphQLResponse = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error:', error);
      setError('Error fetching data');
    }
  };

  const openAtom = (id: number) => {
    chrome.tabs.create({ url: `https://i7n.app/a/${id}` });
  };

  const deposit = async (atomId: number) => {

    try {
      const accounts = await client.requestAddresses();
      const account = accounts[0];
      
      // Replace this with the actual contract interaction
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
        setRefetch(true);
      }, 1000);
    } catch (error) {
      console.error('Error during deposit:', error);
      setError('Error during deposit');
    }
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const thing = data.data.things.items[0];
  const usd = data.data.chainlinkPrices.items[0].usd;

  if (!thing) {
    return <h1 className="text-xl dark:text-slate-400 mt-4">No data found for this URL</h1>;
  }

  const totalStaked = parseFloat(formatEther(BigInt(thing.atom.vault.totalShares)))
    * parseFloat(formatEther(BigInt(thing.atom.vault.currentSharePrice)));

  const tags = thing.atom.asSubject.items.filter((item) => item.predicate.id === '4');

  return (
    <div className="bg-slate-950 p-4">
      <div className="flex flex-col p-4 bg-slate-700 rounded-lg">
        <div className="flex items-center space-x-4 mb-3">
          <img src={thing.image} alt={thing.name} className="w-16 h-16 rounded-full object-cover object-center" />
          <div>
            <h2 className="text-xl font-bold text-slate-200">{thing.name}</h2>
            <p className="text-sm text-slate-400">ID: {thing.atomId}</p>
          </div>
        </div>
        <p className="text-sm text-slate-300 mt-2">{thing.atom.value.thing.description}</p>
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

      {tags.length > 0 && (
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
                      <span className="mr-4">
                        <img src={tag.object.image} className="min-w-6 w-6 h-6 rounded-full object-cover object-center" alt={tag.object.label} />
                      </span>
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