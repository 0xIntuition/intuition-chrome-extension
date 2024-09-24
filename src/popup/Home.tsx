import React, { useEffect, useState } from 'react';
import { Address, formatEther, parseEther } from 'viem';
import { useQuery } from '@apollo/client';
import { getThingsQuery } from './queries.js';
import { AccountImage } from '../AccountImage.js';
import { Tag } from './Tag.js';
import { useMultiVault } from './intuition-react/useMultiVault.js';
import { TagSearch } from './TagSearch';
import { Spinner } from './Spinner.js';
import { AtomForm } from './AtomForm.js';
import { useGraphData, defaultSettings } from './GraphDataContext';


export const Home: React.FC = () => {
  const [currentUrl, setCurrentUrl] = useState<string | undefined>(undefined);
  const [account, setAccount] = useState<Address | undefined>(undefined);
  const { multivault, client } = useMultiVault(account);
  const [showTagSearch, setShowTagSearch] = useState(false);
  const [selectedTag, setSelectedTag] = useState<any>(null);
const { setGraphData } = useGraphData();


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

  useEffect(() => {
    if (data) {
      let nodes: any[] = [];
        let edges: any[] = [];

        // Process things
        data.things?.items.forEach(thing => {
          nodes.push({ id: thing.atomId.toString()});

          // Process atom
          const atom = thing.atom;
          // Process vault
          const vault = atom.vault;
          // Process positions
          vault.positions?.items.forEach(position => {
            nodes.push({ id: position.account.id.toString()});
            edges.push({ id: `${thing.atomId}-${position.account.id}`, from: thing.atomId.toString(), to: position.account.id.toString()});
          });

          // Process asSubject triples
          atom.asSubject?.items.forEach(triple => {
            nodes.push({ id: triple.id.toString() });
            edges.push({ id: `${thing.atomId}-${triple.id}`, from: thing.atomId.toString(), to: triple.id.toString() });

            // Object
            nodes.push({ id: triple.object.id.toString() });
            edges.push({ id: `${triple.id}-${triple.object.id}`, from: triple.id.toString(), to: triple.object.id.toString() });

            // Predicate
            nodes.push({ id: triple.predicate.id.toString() });
            edges.push({ id: `${triple.object.id}-${triple.predicate.id}`, from: triple.object.id.toString(), to: triple.predicate.id.toString() });
            
            // Subject
            edges.push({ id: `${triple.predicate.id}-${thing.atomId}`, from: triple.predicate.id.toString(), to: thing.atomId.toString() });

            // Process counterVault
            const counterVault = triple.counterVault;
            counterVault.positions?.items.forEach(position => {
              nodes.push({ id: position.accountId.toString() });
              edges.push({ id: `${triple.id}-${position.accountId}`, from: triple.id.toString(), to: position.accountId.toString() });
            });

            // Process triple vault
            const tripleVault = triple.vault;
            tripleVault.positions?.items.forEach(position => {
              nodes.push({ id: position.accountId.toString() });
              edges.push({ id: `${triple.id}-${position.accountId}`, from: triple.id.toString(), to: position.accountId.toString() });
            });

          });
        });

        // Make sure all nodes have a unique id
        const uniqueNodes = nodes.filter((node, index, self) =>
          index === self.findIndex((t) => (
            t.id === node.id
          ))
        );

        // Make sure all edges have a unique id
        let uniqueEdges = edges.filter((edge, index, self) =>
          index === self.findIndex((t) => (
            t.id === edge.id
          ))
        );

        // Make sure all edge.from and edge.to are in the nodes array
        uniqueEdges.forEach(edge => {
          if (!uniqueNodes.some(node => node.id === edge.from)) {
            console.error(`Edge ${edge.id} has a from value that is not in the nodes array: ${edge.from}`);
          }
          if (!uniqueNodes.some(node => node.id === edge.to)) {
            console.error(`Edge ${edge.id} has a to value that is not in the nodes array: ${edge.to}`);
          } 
        });

        // Remove edges where from and to are the same
        uniqueEdges = uniqueEdges.filter(edge => edge.from !== edge.to);
      setGraphData({nodes: uniqueNodes, edges: uniqueEdges, settings: defaultSettings});
    }
  }, [data]);

  const openAtom = (id: number) => {
    chrome.tabs.create({ url: `https://i7n.app/a/${id}` });
  };

  const handleTagSelected = async(tag: any) => {
    console.log('tag selected', tag);
    setSelectedTag(tag);
    setShowTagSearch(false);
    const subjectId = BigInt(thing.atomId);
    const predicateId = BigInt(4);
    const objectId = BigInt(tag.id);

    // check if triple exists
    const tripleExists = await multivault.getTripleIdFromAtoms(subjectId, predicateId, objectId);
    if (tripleExists) {
      console.log('Triple exists');
      await multivault.depositTriple(tripleExists, parseEther('0.00042'));
    } else {
      console.log('Triple does not exist');
       await multivault.createTriple({subjectId, predicateId, objectId, initialDeposit: parseEther('0.00042')});
    }

    setTimeout(() => {
      setSelectedTag(null);
      refetch();
    }, 1000);
  };


  if (error) {
    return <div className="text-red-500">{error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const thing = data.things.items[0];
  const usd = data.chainlinkPrices.items[0].usd;

  if (!data?.things) {
    return <AtomForm />;
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
            className={`space-x-1 flex flex-row items-center border border-sky-800 hover:bg-sky-700 text-green-100 text-xs p-1 px-2 rounded-full ${myPosition ? 'bg-sky-800' : 'bg-transparent'}`}>
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
            <Tag key={index} tag={tag} account={account} refetch={refetch} />
          ))
          )}
          <button onClick={() => setShowTagSearch(!showTagSearch)}className="flex items-center border border-slate-800 text-slate-100 hover:border-slate-700 hover:bg-slate-700 hover:text-slate-200 text-xs rounded-full space-x-2 px-2 h-7 bg-transparent">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
            </svg>
          </button>
          {showTagSearch && <TagSearch onSelected={handleTagSelected} />}
          {selectedTag && <div className="flex items-center bg-sky-800 border-slate-800 border text-slate-100 hover:border-slate-700 hover:bg-slate-700 hover:text-slate-200 text-xs rounded-full space-x-2 px-2 h-7">
            <Spinner />
            <span>{selectedTag.label}</span>
          </div>}
        </div>
      </div>
    </div>
  );
};


function getCanonicalUrl() {
  const canonical = document.querySelector('meta[property="og:url"]')?.getAttribute('content');
  const url = document.location.href;
  return { canonical, url };
}