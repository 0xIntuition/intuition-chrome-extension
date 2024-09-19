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
      <button className="flex items-center bg-green-900 text-green-100 hover:bg-green-700 text-xs rounded-l-full space-x-2 px-2 h-7">
      {tag.object.image && (
        <img
          src={tag.object.image}
          alt={tag.object.label || ''}
          className="w-6 h-6 rounded-full object-cover "
        />
      )}
      <span className="text-xs text-slate-200 ml-2">{tag.object.label}</span>
      <span className="text-xs text-slate-200 ml-2">∙ {tag.vault.positionCount}</span>
          
      </button>
      <button className="bg-red-950 hover:bg-red-700 text-red-400 hover:text-red-200 text-xs px-2 rounded-r-full flex h-full items-center space-x-2 h-7">
          {tag.counterVault.positionCount}
      </button>
    </div>
  );
};
