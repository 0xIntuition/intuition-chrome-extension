import { createPublicClient, createWalletClient, custom, http } from 'viem';
import { base } from 'viem/chains';

// Create a public client for interacting with the blockchain (waiting for transaction receipts)
export const publicClient = createPublicClient({
  chain: base,  // Use the Base chain
  transport: http()  // Use HTTP transport for communication
});

// Create a wallet client for signing transactions and interacting with the user's wallet
export const client = createWalletClient({
  chain: base,  // Use the Base chain
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