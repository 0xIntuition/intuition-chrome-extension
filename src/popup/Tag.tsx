import React from 'react';

interface TagProps {
  tag: {
    object: {
      image?: string | null;
      label?: string | null;
    };
    vault: {
      positionCount: number;
    };
    counterVault: {
      positionCount: number;
    };
  };
}

export const Tag: React.FC<TagProps> = ({ tag }) => {
  return (
    <div className="flex items-center  ">
      <button className="flex items-center border border-green-900 border-r-0 text-green-100 hover:border-green-700 hover:bg-green-800 hover:text-green-200 text-xs rounded-l-full space-x-2 px-2 h-7 bg-transparent">
      {tag.object.image && (
        <img
          src={tag.object.image}
          alt={tag.object.label || ''}
          className="w-6 h-6 rounded-full object-cover "
        />
      )}
      <span className="text-xs text-slate-200 ml-2">{tag.object.label}</span>
      <span className="text-xs text-slate-200 ml-4">{tag.vault.positionCount}</span>
      </button>
      <button className="border border-red-950 hover:border-red-700 hover:bg-red-800 text-red-400 hover:text-red-200 text-xs px-2 rounded-r-full flex h-full items-center space-x-2 h-7 bg-transparent border-l-0">
          {tag.counterVault.positionCount}
      </button>
    </div>
  );
};
