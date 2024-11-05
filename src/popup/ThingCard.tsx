import React from 'react';
import { Address, formatEther } from 'viem';
import { AccountImage } from '../AccountImage.js';
import { Tag } from './Claim.js';
import { TagSearch } from './TagSearch';
import { Spinner } from './Spinner.js';

export interface Thing {
  atomId: number;
  url?: string | null;
  name?: string | null;
  image?: string | null;
  atom?: {
    value?: {
      thing?: {
        description?: string;
      };
    } | null;
    vault?: {
      positionCount: number;
      totalShares: string;
      currentSharePrice: string;
      myPosition: Array<{
        shares: string;
        accountId: string;
      }>;
      positions: Array<{
        shares: string;
        account?: {
          id: string;
          type: string;
          image?: string;
          label?: string;
        };
      }>;
    } | null;
    asSubject: Array<{
      id: string;
      object: {
        id: string;
        label?: string;
        emoji?: string;
        image?: string;
      };
      predicate: {
        emoji?: string;
        label?: string;
        image?: string;
        id: string;
      };
      counterVault: {
        id: string;
        positionCount: number;
        totalShares: string;
        currentSharePrice: string;
        myPosition: Array<{
          shares: string;
          accountId: string;
        }>;
        positions: Array<{
          shares: string;
          accountId: string;
        }>;
      };
      vault: {
        id: string;
        positionCount: number;
        totalShares: string;
        currentSharePrice: string;
        myPosition: Array<{
          shares: string;
          accountId: string;
        }>;
        positions: Array<{
          shares: string;
          accountId: string;
        }>;
      };
    }>;
  } | null;
}

interface ThingCardProps {
  thing: Thing;
  account?: Address;
  usd: number;
  handleTagSelected: (tag: any, atomId: number) => void;
  handleAtomClick: (atomId: number, myPosition: string | undefined) => void;
  openAtom: (id: number) => void;
  useClaimsFromFollowing: (address: string | undefined, subjectId: number) => any[];
}

export const ThingCard: React.FC<ThingCardProps> = ({
  thing,
  account,
  usd,
  handleTagSelected,
  handleAtomClick,
  openAtom,
  useClaimsFromFollowing
}) => {
  const [showTagSearch, setShowTagSearch] = React.useState(false);
  const [selectedTag, setSelectedTag] = React.useState<any>(null);
  const [showGlobalClaims, setShowGlobalClaims] = React.useState(false);

  const claims = useClaimsFromFollowing(
    account?.toLocaleLowerCase(),
    thing.atomId
  );

  type Triple = {
    id: string,
    vaultId: string,
    counterVaultId: string,
    label: string,
    subject: {
      emoji: string,
      label: string,
      image: string,
      id: string,
    },
    predicate: {
      emoji: string,
      label: string,
      image: string,
      id: string,
    },
    object: {
      emoji: string,
      label: string,
      image: string,
      id: string,
    },
  }

  const triples: Array<{
    triple: Triple,
    claimsForCount: number,
    claimsAgainstCount: number,
  }> = [];

// Group claims by triple ID
const tripleGroups = claims.reduce((acc: { [key: string]: any[] }, claim: any) => {
  const tripleId = claim.triple.id;
  if (!acc[tripleId]) {
    acc[tripleId] = [];
  }
  acc[tripleId].push(claim);
  return acc;
}, {});

// Process each unique triple
Object.entries(tripleGroups).forEach(([tripleId, claims]) => {
  const claimsFor = claims.filter(claim => claim.shares > 0);
  const claimsAgainst = claims.filter(claim => claim.counterShares > 0);

  triples.push({
    triple: claims[0].triple,
    claimsForCount: claimsFor.length,
    claimsAgainstCount: claimsAgainst.length,
  });
});

  const myPosition = thing.atom?.vault?.myPosition[0]?.shares;
  const myPositionInEth = parseFloat(formatEther(BigInt(myPosition || 0))) * parseFloat(formatEther(BigInt(thing.atom?.vault?.currentSharePrice || 0)));
  const totalStaked = parseFloat(formatEther(BigInt(thing.atom?.vault?.totalShares || 0)))
    * parseFloat(formatEther(BigInt(thing.atom?.vault?.currentSharePrice || 0)));

  const tags = thing.atom?.asSubject?.filter((item) => item.predicate?.id === '4') || [];
  const numberOfRemainingPositions = !thing.atom?.vault?.positionCount || thing.atom?.vault?.positionCount <= 5 ? '' : `+${thing.atom?.vault?.positionCount - 5}`;

  const handleLocalTagSelected = async (tag: any, atomId: number) => {
    setSelectedTag(tag);
    setShowTagSearch(false);
    await handleTagSelected(tag, atomId);
    setTimeout(() => setSelectedTag(null), 1000);
  };

  return (
    <div className="bg-slate-950 p-2">
      <div className="flex flex-col p-4 bg-slate-900 rounded-lg">
        <div className="flex items-center space-x-4 mb-3">
          {thing.image && <img src={thing.image} className="w-16 h-16 rounded-full object-cover object-center" />}
          <div>
            <h2 className="text-xl font-bold text-slate-200">{thing.name}</h2>
            <p>
              <button onClick={() => openAtom(thing.atomId)} className="text-xs text-slate-600 hover:text-slate-400">
                did:i7n:84532:{thing.atomId}
              </button>
            </p>
          </div>
        </div>
        <p className="text-sm text-slate-300 mt-2">{thing.atom?.value?.thing?.description}</p>
        <div className="flex flex-row mt-3 space-x-1">
          <button
            title={`Total staked: ${totalStaked.toFixed(6)} ETH (${(totalStaked * usd).toFixed(2)} USD) by ${thing.atom?.vault?.positionCount || 0 - 1} accounts \n My position: ${myPositionInEth.toFixed(6)} ETH (${(myPositionInEth * usd).toFixed(2)} USD)`}
            onClick={() => handleAtomClick(thing.atomId, myPosition)}
            className={`space-x-1 flex flex-row items-center border border-sky-800 hover:bg-sky-700 text-green-100 text-xs p-1 px-2 rounded-full ${myPosition ? 'bg-sky-800' : 'bg-transparent'}`}>
            <span className="text-sm">✓</span>
            <div className="flex flex-row mr-3">
              {thing.atom?.vault?.positions?.filter((position) => position.account?.type === 'Default').map((position) => (
                <div style={{ marginRight: '-6px' }}
                  key={position.account?.id}>
                  <AccountImage
                    id={position.account?.id as `0x${string}`}
                    image={position.account?.image} />
                </div>
              ))}
            </div>
            <span className="pl-2">{numberOfRemainingPositions}</span>
          </button>
        </div>
        <div className="flex flex-row flex-wrap gap-2 mt-3 space-x-1 border-t border-slate-800 pt-3">
          <button onClick={() => setShowGlobalClaims(!showGlobalClaims)} className="flex items-center border border-slate-800 text-slate-100 hover:border-slate-700 hover:bg-slate-700 hover:text-slate-200 text-xs rounded-full space-x-2 px-2 h-7 bg-transparent">
            <span>{showGlobalClaims ? '🌐' : '👥'}</span>
          </button>

          {showGlobalClaims && tags?.length > 0 && (tags.map((tag, index) => (
            <Tag key={index} tag={tag} account={account} refetch={() => {}} />
          )))}

          {!showGlobalClaims && triples?.length > 0 && (triples.map((triple, index) => (
            <Tag key={index} tag={triple.triple} account={account} refetch={() => {}} claimsForCount={triple.claimsForCount} claimsAgainstCount={triple.claimsAgainstCount} />
          ))
          )}
          <button onClick={() => setShowTagSearch(!showTagSearch)} className="flex items-center border border-slate-800 text-slate-100 hover:border-slate-700 hover:bg-slate-700 hover:text-slate-200 text-xs rounded-full space-x-2 px-2 h-7 bg-transparent">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
            </svg>
          </button>
          {showTagSearch && <TagSearch onSelected={handleLocalTagSelected} atomId={thing.atomId} />}
          {selectedTag && <div className="flex items-center bg-sky-800 border-slate-800 border text-slate-100 hover:border-slate-700 hover:bg-slate-700 hover:text-slate-200 text-xs rounded-full space-x-2 px-2 h-7">
            <Spinner />
            <span>{selectedTag.label}</span>
          </div>}
        </div>
      </div>
    </div>
  );
}; 