import React, { useState, useEffect } from 'react';
import { useMultiVault } from './intuition-react/useMultiVault';
import { Address } from 'viem';
import { getMyPositionsQuery } from './queries';
import { useQuery } from '@apollo/client';
import { Tag } from './Tag';
import { Settings } from './Settings';

export const Me: React.FC = () => {
  const [account, setAccount] = useState<Address | undefined>(undefined);
  const { client } = useMultiVault(account);

  const { data, error, refetch, loading } = useQuery(getMyPositionsQuery, {
    variables: {
      address: account?.toLocaleLowerCase(),
    },
    skip: !account,
  });
  console.log('data', data);

  useEffect(() => {
    const loadAccount = async () => {
      const savedAccount = localStorage.getItem('account');
      if (savedAccount) {
        setAccount(savedAccount as Address);
      } else if (client) {
        try {
          const accounts = await client.requestAddresses();
          const newAccount = accounts[0];
          if (newAccount) {
            setAccount(newAccount);
            localStorage.setItem('account', newAccount);
          }
        } catch (error) {
          console.error('Error fetching account:', error);
        }
      }
    };

    loadAccount();
  }, [client]);

  const handleConnect = async () => {
    if (client) {
      try {
        const accounts = await client.requestAddresses();
        const newAccount = accounts[0];
        if (newAccount) {
          setAccount(newAccount);
          localStorage.setItem('account', newAccount);
        }
      } catch (error) {
        console.error('Error connecting account:', error);
      }
    }
  };

  const importBookmarks = async () => {
    const bookmarks = await chrome.bookmarks.getTree();
    const bookmarksBarFolder = bookmarks[0].children?.find((bookmark) => bookmark.id === '1');
    if (data && bookmarksBarFolder) {
      console.log(bookmarks);
      const subfolderMap = new Map();

      for (const position of data.positions.filter(
        (position) => position.vault?.triple?.predicate?.id === '4'
          && position.vault?.triple?.subject?.value?.thing?.url
      )) {
        console.log(position.vault?.triple?.subject?.value?.thing?.url);
        const objectLabel = position.vault?.triple?.object?.label || '';

        let subfolder = subfolderMap.get(objectLabel);
        if (!subfolder) {
          subfolder = bookmarksBarFolder.children?.find((child) => child.title === objectLabel);
          if (!subfolder) {
            subfolder = await chrome.bookmarks.create({
              parentId: '1',
              title: objectLabel,
            });
            console.log(subfolder);
          }
          subfolderMap.set(objectLabel, subfolder);
        }

        const bookmarkTitle = position.vault?.triple?.subject?.label || '';
        const bookmarkUrl = position.vault?.triple?.subject?.value?.thing?.url || '';
        const existingBookmark = await chrome.bookmarks.search({ title: bookmarkTitle });

        const bookmarkInSubfolder = existingBookmark.find(bookmark =>
          bookmark.parentId === subfolder.id && bookmark.url === bookmarkUrl
        );

        if (!bookmarkInSubfolder) {
          const b = await chrome.bookmarks.create({
            parentId: subfolder.id,
            title: bookmarkTitle,
            url: bookmarkUrl,
          });
          console.log(b);
        }
      }
    }
  };

  return (
    <div className="p-4 bg-slate-900 text-slate-200 min-h-screen">


      {!account &&
        <div className="mb-4">
          <button
            onClick={handleConnect}
            className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
          >
            Connect Wallet
          </button>
        </div>
      }
      {error && <p className="text-slate-400 mt-4">Error: {error.message}</p>}
      <div className="">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl">Bookmarks</h2>
          {!loading && data && <button
            onClick={importBookmarks}
            className="p-1 px-4 bg-slate-800 rounded-full hover:bg-slate-600 text-xs"
          >
            Sync
          </button>}
        </div>
        {loading && <p className="text-slate-400 mt-4">Loading...</p>}
        {data?.positions.filter(
          (position) => position.vault?.triple?.predicate?.id === '4'
            && position.vault?.triple?.subject?.value?.thing?.url
        ).map((position) => (
          <div key={position.id} className="bg-slate-800 p-2 rounded mb-2">
            <p>{position.vault?.triple?.subject?.label}</p>
            <span className="bg-slate-700 text-xs p-1 px-2 rounded-full mt-1">
              {position.vault?.triple?.object?.label}
            </span>
          </div>
        ))}
      </div>
      <Settings />
    </div>
  );
};
