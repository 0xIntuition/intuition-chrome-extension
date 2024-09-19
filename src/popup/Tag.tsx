import React, { useState } from 'react';
import { Address, parseEther } from 'viem';
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
    };
    counterVault: {
      id: string;
      positionCount: number;
    };
  };
}

export const Tag: React.FC<TagProps> = ({ tag, account }) => {
  const [bgClass, setBgClass] = useState('bg-transparent');
  const [loading, setLoading] = useState(false);
  const { multivault } = useMultiVault(account);

  const depositTriple = async (vaultId: string) => {
    console.log('depositTriple', vaultId);
    setLoading(true);
    const tx = await multivault.depositTriple(BigInt(vaultId), parseEther('0.00042'));
    console.log(tx);
    setLoading(false);
  };

  return (
    <div className={`flex items-center border rounded-full border-green-900 ${bgClass}`}>

      <button
        disabled={loading}
        onClick={() => depositTriple(tag.vault.id)}
        onMouseEnter={() => setBgClass('bg-green-900 border-green-900')}
        onMouseLeave={() => setBgClass('bg-transparent border-green-900')}
        className="flex items-center  text-green-100  text-xs rounded-l-full space-x-3 px-2 h-7 ">
      {tag.object.image && (
        <img
          src={tag.object.image}
          alt={tag.object.label || ''}
          className="w-6 h-6 rounded-full object-cover "
        />
      )}
      <span className="text-xs text-slate-200 ml-2 ">{tag.object.label}</span>
      <span className="text-xs text-slate-200 ">{tag.vault.positionCount}</span>
      </button>
      <button
        disabled={loading}
        onClick={() => depositTriple(tag.counterVault.id)}
        onMouseEnter={() => setBgClass('bg-rose-900 border-rose-900')}
        onMouseLeave={() => setBgClass('bg-transparent border-green-900')}
        className="text-rose-400 hover:text-rose-200 text-xs px-2 flex h-full items-center space-x-2 h-7 ">
          {tag.counterVault.positionCount}
      </button>
    </div>
  );
};
