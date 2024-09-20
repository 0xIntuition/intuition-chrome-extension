import React, { useState } from 'react';
import { Address, formatEther, parseEther } from 'viem';
import { useMultiVault } from './intuition-react/useMultiVault';

interface TagProps {
  account?: Address;
  tag: {
    object: {
      image?: string | null;
      label?: string | null;
    };
    vault: {
      id: string;
      positionCount: number;
      totalShares: number;
      currentSharePrice: number;
      myPosition?: {
        items: {
          shares: number;
        }[];
      } | null;
    };
    counterVault: {
      id: string;
      positionCount: number;
      totalShares: number;
      currentSharePrice: number;
      myPosition?: {
        items: {
          shares: number;
        }[];
      } | null;
    };
  };
}

export const Tag: React.FC<TagProps> = ({ tag, account }) => {
  const { multivault } = useMultiVault(account);
  const [bgClass, setBgClass] = useState('bg-transparent border-slate-800');
  const [loading, setLoading] = useState(false);
  const myPosition = tag.vault.myPosition?.items[0]?.shares;
  const myCounterPosition = tag.counterVault.myPosition?.items[0]?.shares;

  const myPositionInEth = parseFloat(formatEther(BigInt(myPosition || 0))) * parseFloat(formatEther(BigInt(tag.vault.currentSharePrice)));
  const totalStaked = parseFloat(formatEther(BigInt(tag.vault.totalShares)))
    * parseFloat(formatEther(BigInt(tag.vault.currentSharePrice)))
    + parseFloat(formatEther(BigInt(tag.counterVault.totalShares)))
    * parseFloat(formatEther(BigInt(tag.counterVault.currentSharePrice)))
    ;
  const totalPositionCount = tag.vault.positionCount + tag.counterVault.positionCount;

  const handleTagClick = (isCounterVault: boolean) => {
    if (myPosition) {
      setBgClass('bg-slate-800 border-slate-800')
      redeemTriple(tag.vault.id, myPosition);
    } else if (myCounterPosition) {
      setBgClass('bg-rose-900 border-rose-900')
      redeemTriple(tag.counterVault.id, myCounterPosition);
    } else if (isCounterVault) {
      setBgClass('bg-rose-900 border-rose-900')
      depositTriple(tag.counterVault.id);
    } else {
      setBgClass('bg-slate-800 border-slate-800')
      depositTriple(tag.vault.id);
    }
  };

  const redeemTriple = async (vaultId: string, amount: number) => {
    setLoading(true);
    const tx = await multivault.redeemTriple(BigInt(vaultId), BigInt(amount));
    console.log(tx);
    setLoading(false);
  };

  const depositTriple = async (vaultId: string) => {
    setLoading(true);
    const tx = await multivault.depositTriple(BigInt(vaultId), parseEther('0.00042'));
    console.log(tx);
    setLoading(false);
  };

  const finalBgClass = myPosition && myCounterPosition ? 'bg-slate-800 border-slate-800' : myPosition ? 'bg-slate-800 border-slate-800' : myCounterPosition ? 'bg-rose-900 border-rose-900' : bgClass;

  return (
    <div className={`flex items-center border rounded-full  ${finalBgClass} `} title={`Total Staked: ${totalStaked.toFixed(6)} ETH by ${totalPositionCount} accounts \n My Position: ${myPositionInEth.toFixed(6)} ETH`}>
      <button
        disabled={loading}
        onClick={() => handleTagClick(false)}
        onMouseEnter={() => setBgClass('bg-slate-800 border-slate-800')}
        onMouseLeave={() => setBgClass('bg-transparent border-slate-800')}
        className="flex items-center  text-slate-100  text-xs rounded-l-full space-x-3 px-2 h-7 ">
        {tag.object.image && (
          <img
            src={tag.object.image}
            alt={tag.object.label || ''}
            className="w-6 h-6 rounded-full object-cover "
          />
        )}
        <span className="text-xs text-slate-200 ml-2 ">{loading ? 'Waiting...' : tag.object.label}</span>
        <span className="text-xs text-slate-200 ">{tag.vault.positionCount}</span>
      </button>
      <button
        disabled={loading}
        onClick={() => handleTagClick(true)}
        onMouseEnter={() => setBgClass('bg-rose-900 border-rose-900')}
        onMouseLeave={() => setBgClass('bg-transparent border-slate-800')}
        className="text-rose-400 hover:text-rose-200 text-xs px-2 flex h-7 items-center space-x-2 ">
        {tag.counterVault.positionCount}
      </button>
    </div>
  );
};
