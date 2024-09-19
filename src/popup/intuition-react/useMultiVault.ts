import { useEffect, useState } from 'react';
import { Multivault } from '../../protocol/multivault';
import { publicClient } from '../clients.js';
import { createPublicClient, createWalletClient, custom, http, WalletClient } from 'viem';
import { base } from 'viem/chains';

export function useMultiVault(account?: `0x${string}`) {
  const [client, setClient] = useState<WalletClient | undefined>(undefined);

  useEffect(() => {
    if (!account) {
      return;
    }
    const client = createWalletClient({
      chain: base,  // Use the Base chain
      account,
      transport: custom({
        // Custom request function to communicate with the in-page script via Chrome extension messaging
        async request({ method, params }: { method: string; params: any[] }) {
          return new Promise((resolve, reject) => {
            // Create a message handler to process responses from the in-page script
            const messageHandler = (message: any) => {
              if (message.type === 'FROM_IFRAME' && message.id === method) {
                // Remove the listener once we've received the response
                chrome.runtime.onMessage.removeListener(messageHandler);
                if (message.error) {
                  reject(new Error(message.error));
                } else {
                  resolve(message.result);
                }
              }
            };

            // Add the message listener
            chrome.runtime.onMessage.addListener(messageHandler);

            // Send a message to the active tab's content script
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
              chrome.tabs.sendMessage(tabs[0].id!, {
                type: 'FROM_POPUP',
                method,
                params,
              });
            });
          });
        }
      })
    });
    setClient(client);
  }, [account]);

  const multivault = new Multivault({
    // @ts-ignore
    publicClient,
    // @ts-ignore
    walletClient: client,
  });

  return { multivault, client };
}
