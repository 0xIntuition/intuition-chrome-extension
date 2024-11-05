import React, { useState } from 'react';
import { Address, formatEther, parseEther } from 'viem';
import { useMultiVault } from './intuition-react/useMultiVault';
import { Spinner } from './Spinner';

interface TagProps {
  refetch: () => void;
  account?: Address;
  claimsForCount?: number;
  claimsAgainstCount?: number;
  tag: {
    object?: {
      emoji?: string | null;
      image?: string | null;
      label?: string | null;
    } | null;
    predicate?: {
      id?: string | null;
      emoji?: string | null;
      image?: string | null;
      label?: string | null;
    } | null;
    vault?: {
      id: string;
      positionCount: number;
      totalShares: string;
      currentSharePrice: string;
      myPosition: {
        shares: string;
      }[];
    } | null;
    counterVault?: {
      id: string;
      positionCount: number;
      totalShares: string;
      currentSharePrice: string;
      myPosition: {
        shares: string;
      }[];
    } | null;
  };
}

export const Tag: React.FC<TagProps> = ({ tag, account, refetch, claimsForCount, claimsAgainstCount }) => {
  const { multivault } = useMultiVault(account);
  const [bgClass, setBgClass] = useState('bg-transparent border-slate-800');
  const [loading, setLoading] = useState(false);
  const myPosition = tag.vault?.myPosition[0]?.shares;
  const myCounterPosition = tag.counterVault?.myPosition[0]?.shares;

  const myPositionInEth = parseFloat(formatEther(BigInt(myPosition || 0))) * parseFloat(formatEther(BigInt(tag.vault?.currentSharePrice || 0)));
  const totalStaked = parseFloat(formatEther(BigInt(tag.vault?.totalShares || 0)))
    * parseFloat(formatEther(BigInt(tag.vault?.currentSharePrice || 0)))
    + parseFloat(formatEther(BigInt(tag.counterVault?.totalShares || 0)))
    * parseFloat(formatEther(BigInt(tag.counterVault?.currentSharePrice || 0)))
    ;
  const totalPositionCount = (tag.vault?.positionCount || 0) + (tag.counterVault?.positionCount || 0);

  const handleTagClick = (isCounterVault: boolean) => {
    if (myPosition) {
      setBgClass('bg-sky-800 border-slate-800')
      if (tag.vault?.id) {
        redeemTriple(tag.vault?.id, myPosition);
      }
    } else if (myCounterPosition) {
      setBgClass('bg-rose-900 border-rose-900')
      if (tag.counterVault?.id) {
        redeemTriple(tag.counterVault.id, myCounterPosition);
      }
    } else if (isCounterVault) {
      setBgClass('bg-rose-900 border-rose-900')
      if (tag.counterVault?.id) {
        depositTriple(tag.counterVault.id);
      }
    } else {
      setBgClass('bg-sky-800 border-slate-800')
      if (tag.vault?.id) {
        depositTriple(tag.vault.id);
      }
    }
  };

  const redeemTriple = async (vaultId: string, amount: string) => {
    setLoading(true);
    const tx = await multivault.redeemTriple(BigInt(vaultId), BigInt(amount));
    console.log(tx);
    setLoading(false);
    refetch();
  };

  const depositTriple = async (vaultId: string) => {
    setLoading(true);
    const tx = await multivault.depositTriple(BigInt(vaultId), parseEther('0.00042'));
    console.log(tx);
    setLoading(false);
    refetch();
  };

  const finalBgClass = myPosition && myCounterPosition ? 'bg-sky-800 border-slate-800' : myPosition ? 'bg-sky-800 border-slate-800' : myCounterPosition ? 'bg-rose-900 border-rose-900' : bgClass;

  return (
    <div className={`flex items-center border rounded-full  ${finalBgClass} `} title={`Total Staked: ${totalStaked.toFixed(6)} ETH by ${totalPositionCount} accounts \n My Position: ${myPositionInEth.toFixed(6)} ETH`}>
      <button
        disabled={loading}
        onClick={() => handleTagClick(false)}
        onMouseEnter={() => setBgClass('bg-sky-800 border-slate-800')}
        onMouseLeave={() => setBgClass('bg-transparent border-slate-800')}
        className="flex items-center  text-slate-100  text-xs rounded-l-full space-x-3 px-2 h-7 ">
        {loading && <Spinner />}
        {!loading && tag.object?.image && (
          <img
            src={tag.object?.image}
            alt={tag.object?.label || ''}
            className="w-6 h-6 rounded-full object-cover "
          />
        )}
        <span className="text-xs text-slate-200 ml-2 ">{tag.predicate?.id === '4' ? '' : tag.predicate?.label} {tag.object?.label}</span>
        <span className="text-xs text-slate-200 ">{claimsForCount || tag.vault?.positionCount}</span>
      </button>
      <button
        disabled={loading}
        onClick={() => handleTagClick(true)}
        onMouseEnter={() => setBgClass('bg-rose-900 border-rose-900')}
        onMouseLeave={() => setBgClass('bg-transparent border-slate-800')}
        className="text-rose-400 hover:text-rose-200 text-xs px-2 flex h-7 items-center space-x-2 ">
        {claimsAgainstCount || tag.counterVault?.positionCount}
      </button>
    </div>
  );
};
