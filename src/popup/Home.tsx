import React, { useEffect, useState } from 'react';
import { Address, formatEther, isAddress, parseEther } from 'viem';
import { useQuery } from '@apollo/client';
import { getThingsQuery, getClaimsFromFollowingAboutSubject, searchAtomsByUriQuery } from './queries.js';
import { AccountImage } from './AccountImage.js';
import { Tag } from './Tag.js';
import { useMultiVault } from './intuition-react/useMultiVault.js';
import { TagSearch } from './TagSearch';
import { Spinner } from './Spinner.js';
import { AtomForm } from './AtomForm.js';
import { useGraphData, defaultSettings } from './GraphDataContext';
import { Atom, AtomCard } from './AtomCard.js';
import { isSmartContract, supportedChains } from './util.js';


export const Home: React.FC = () => {
  const [currentUrl, setCurrentUrl] = useState<string | undefined>(undefined);
  const [showAtomForm, setShowAtomForm] = useState(false);
  const [account, setAccount] = useState<Address | undefined>(undefined);
  const { multivault, client } = useMultiVault(account);
  const [showTagSearch, setShowTagSearch] = useState(false);
  const [selectedTag, setSelectedTag] = useState<any>(null);
  const { setGraphData } = useGraphData();

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
      const url = tabs[0]!.url;
      const chain = supportedChains.find((c) => url?.startsWith(c.blockExplorers.default.url));
      if (chain) {
        // extract ethereum address from url
        const address = url?.match(/0x[a-fA-F0-9]{40}/)?.[0];
        console.log('address', address?.toLowerCase());
        if (address && isAddress(address)) {
          const isContract = await isSmartContract(address, chain);
          if (!isContract) {
            setCurrentUrl(address.toLowerCase());
          } else {
            setCurrentUrl(`caip10:eip155:${chain.id}:${address.toLowerCase()}`);
          }
        }
      } else {
        setCurrentUrl(url);
      }
    });
  }, []);

  useEffect(() => {
    const cachedAccount = localStorage.getItem('account');
    if (cachedAccount) {
      setAccount(cachedAccount as Address);
    }
  }, []);

  const { data, error, refetch } = useQuery(searchAtomsByUriQuery, {
    variables: {
      uri: currentUrl,
      address: account?.toLocaleLowerCase() || '',
    },
    skip: !currentUrl,
  });

  useEffect(() => {
    if (data) {
      let nodes: any[] = [];
      let edges: any[] = [];

      // Process things
      data.atoms?.forEach(atom => {
        nodes.push({ id: atom.id.toString() });

        // Process vault
        const vault = atom?.vault;
        // Process positions
        vault?.positions?.forEach(position => {
          nodes.push({ id: position.account?.id.toString() });
          edges.push({ id: `${atom.id}-${position.account?.id}`, from: atom.id.toString(), to: position.account?.id.toString() });
        });

        // Process asSubject triples
        atom?.as_subject_triples?.forEach(triple => {
          nodes.push({ id: triple.id.toString() });
          edges.push({ id: `${atom.id}-${triple.id}`, from: atom.id.toString(), to: triple.id.toString() });

          // Object
          nodes.push({ id: triple.object?.id.toString() });
          edges.push({ id: `${triple.id}-${triple.object?.id}`, from: triple.id.toString(), to: triple.object?.id.toString() });

          // Predicate
          nodes.push({ id: triple.predicate?.id.toString() });
          edges.push({ id: `${triple.object?.id}-${triple.predicate?.id}`, from: triple.object?.id.toString(), to: triple.predicate?.id.toString() });

          // Subject
          edges.push({ id: `${triple.predicate?.id}-${atom.id}`, from: triple.predicate?.id.toString(), to: atom.id.toString() });

          // Process counterVault
          const counterVault = triple.counter_vault;
          counterVault?.positions?.forEach(position => {
            nodes.push({ id: position.account_id.toString() });
            edges.push({ id: `${triple.id}-${position.account_id}`, from: triple.id.toString(), to: position.account_id.toString() });
          });

          // Process triple vault
          const tripleVault = triple.vault;
          tripleVault?.positions?.forEach(position => {
            nodes.push({ id: position.account_id.toString() });
            edges.push({ id: `${triple.id}-${position.account_id}`, from: triple.id.toString(), to: position.account_id.toString() });
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
      setGraphData({ nodes: uniqueNodes, edges: uniqueEdges, settings: defaultSettings });
      setShowAtomForm(false);

    } else {
      setShowAtomForm(true);
    }
  }, [data]);

  const openAtom = (id: number) => {
    chrome.tabs.create({ url: `https://i7n.app/a/${id}` });
  };

  const handleTagSelected = async (tag: any, atomId: number) => {
    console.log('tag selected', tag);
    setSelectedTag(tag);
    setShowTagSearch(false);
    const subjectId = BigInt(atomId);
    const predicateId = BigInt(4);
    const objectId = BigInt(tag.id);

    // check if triple exists
    const tripleExists = await multivault.getTripleIdFromAtoms(subjectId, predicateId, objectId);
    if (tripleExists) {
      console.log('Triple exists');
      await multivault.depositTriple(tripleExists, parseEther('0.00042'));
    } else {
      console.log('Triple does not exist');
      await multivault.createTriple({ subjectId, predicateId, objectId, initialDeposit: parseEther('0.00042') });
    }

    setTimeout(() => {
      setSelectedTag(null);
      refetch();
    }, 1000);
  };

  const useClaimsFromFollowing = (address: string | undefined, subjectId: number) => {
    const { data } = useQuery(getClaimsFromFollowingAboutSubject, {
      variables: {
        address: address as string,
        subjectId,
      },
      skip: !subjectId || !address,
    });
    return data?.claims_from_following || [];
  };

  if (error) {
    return <div className="text-red-500">{error.message}</div>;
  }

  if (!data) {
    return <div className="flex justify-center items-center p-2"><Spinner /></div>;
  }
  const handleAtomClick = (atomId: number, myPosition: string | undefined) => {
    if (myPosition) {
      redeem(atomId, myPosition);
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

  const redeem = async (atomId: number, myPosition: string) => {
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

  if (!data?.atoms || data.atoms.length === 0 || showAtomForm) {
    return <AtomForm />;
  }
  // const usd = data.chainLinkPrices[0].usd;
  const usd = 3302.34864192; // hardcoded for now:w

  return (<>
    {!showAtomForm && <div className="flex justify-end items-center p-2"><button
      onClick={() => setShowAtomForm(true)}
      className="p-1 px-4 bg-slate-800 rounded-full hover:bg-slate-600 text-xs"
    >
      Add
    </button></div>}
    {data.atoms.map((atom) => (
      <AtomCard
        key={atom.id}
        atom={atom as Atom}
        account={account}
        usd={usd}
        handleTagSelected={handleTagSelected}
        handleAtomClick={handleAtomClick}
        openAtom={openAtom}
        useClaimsFromFollowing={useClaimsFromFollowing}
      />
    ))}
  </>
  );
};
