import { createPublicClient, createWalletClient, custom, http } from 'viem';
import { base } from 'viem/chains';
import createMetaMaskProvider from 'metamask-extension-provider';

// Create a public client for interacting with the blockchain (waiting for transaction receipts)
export const publicClient = createPublicClient({
  chain: base,  // Use the Base chain
  transport: http()  // Use HTTP transport for communication
});

// Create a wallet client for signing transactions and interacting with the user's wallet
export const walletClient = createWalletClient({
  chain: base,  // Use the Base chain
  transport: custom(createMetaMaskProvider())  // Use MetaMask provider for communication
});
