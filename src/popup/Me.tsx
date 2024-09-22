import React, { useState, useEffect } from 'react';
import { useMultiVault } from './intuition-react/useMultiVault';
import { Address } from 'viem';

export const Me: React.FC = () => {
  const [account, setAccount] = useState<Address | undefined>(undefined);
  const { client } = useMultiVault(account);

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

  return (
    <div className="p-4 bg-slate-900 text-slate-200 min-h-screen">
      <h1 className="text-2xl mb-4">Account</h1>
      
      <div className="mb-4">
        <label className="block mb-2">Account Address:</label>
        {account ? (
          <div className="flex items-center justify-between">
            <span className="bg-slate-800 p-2 rounded">{account}</span>
          </div>
        ) : (
          <button
            onClick={handleConnect}
            className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
};
