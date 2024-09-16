function loadEthers() {
  return new Promise((resolve, reject) => {
    if (typeof window.ethers !== 'undefined') {
      resolve();
    } else {
      const script = document.createElement('script');
      script.src = 'https://cdn.ethers.io/lib/ethers-5.0.umd.min.js';
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    }
  });
}

loadEthers().then(() => {
  const abi = [
    {
      "type": "function",
      "name": "depositAtom",
      "inputs": [
        {
          "name": "receiver",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "payable"
    }
  ];

  const chainId = '8453';
  const contractAddress = '0x430BbF52503Bd4801E51182f4cB9f8F534225DE5';

  async function deposit(atomId) {
    if (typeof window.ethereum === 'undefined') {
      console.error('Ethereum wallet not detected');
      return;
    }

    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(contractAddress, abi, signer);

      const tx = await contract.depositAtom(await signer.getAddress(), atomId, { value: ethers.utils.parseEther("0.00042") });
      await tx.wait();

      window.postMessage({ type: "FROM_INJECTED_SCRIPT", success: true, message: "Deposit successful" }, "*");
    } catch (error) {
      console.error('Error:', error);
      window.postMessage({ type: "FROM_INJECTED_SCRIPT", success: false, message: error.message }, "*");
    }
  }

  window.addEventListener("message", (event) => {
    if (event.data.type && event.data.type === "FROM_CONTENT_SCRIPT") {
      if (event.data.action === "deposit") {
        deposit(event.data.atomId);
      }
    }
  });
}).catch(error => {
  console.error('Failed to load ethers:', error);
});
