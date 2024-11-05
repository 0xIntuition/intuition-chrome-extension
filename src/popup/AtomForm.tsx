import OpenAI from "openai";
import { useEffect, useState } from "react";
import { Spinner } from "./Spinner";
import { PinataSDK } from "pinata-web3"
import { useMultiVault } from './intuition-react/useMultiVault.js';
import { Address, Chain, isAddress, parseEther } from "viem";
import { isSmartContract, supportedChains } from "./util";

export const AtomForm = () => {
  const [chainId, setChainId] = useState<number | undefined>(undefined);
  const [type, setType] = useState<'url' | 'address' | 'caip10'>('url');
  const [uri, setUri] = useState<string | undefined>(undefined);
  const [openai, setOpenai] = useState<OpenAI | null>(null);
  const [pinata, setPinata] = useState<PinataSDK | null>(null);
  const [account, setAccount] = useState<Address | undefined>(undefined);
  const [progressMessage, setProgressMessage] = useState<string | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const { multivault, client } = useMultiVault(account);
  const [creatingAtom, setCreatingAtom] = useState(false);
  useEffect(() => {
    const cachedAccount = localStorage.getItem('account');
    if (cachedAccount) {
      setAccount(cachedAccount as Address);
    }
  }, []);

  useEffect(() => {
    const pinataApiKey = localStorage.getItem('pinataApiKey');
    if (pinataApiKey) {
      setPinata(new PinataSDK({
        pinataJwt: pinataApiKey,
      }));
    }
  }, []);

  useEffect(() => {
    const apiKey = localStorage.getItem('openaiApiKey');
    if (apiKey) {
      setOpenai(new OpenAI({
        apiKey: apiKey,
        dangerouslyAllowBrowser: true
      }));
    }
  }, []);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
      const tabId = tabs[0]!.id!;
      const url = tabs[0]!.url;

      // extract ethereum address from url
      const address = url?.match(/0x[a-fA-F0-9]{40}/)?.[0];

      if (address && isAddress(address)) {
        const chain = supportedChains.find((c) => url.startsWith(c.blockExplorers.default.url));
        if (chain) {
          const chainId = chain.id;
          const isContract = await isSmartContract(address, chain);
          if (isContract) {
            setUri(`caip10:eip155:${chainId}:${address}`);
            setLabel(address.slice(0, 6) + '...' + address.slice(-4));
            setDescription(`Contract on ${chain.name}`);
            setType('caip10');
          }
        } else {
          setCurrentUrl(address.toLowerCase());
          setUri(address.toLowerCase());
          setLabel(address.slice(0, 6) + '...' + address.slice(-4));
          setDescription('Ethereum account');
          setType('address');
        }
      } else {
        chrome.scripting.executeScript({
          target: { tabId },
          func: extractOpenGraphTags,
        }).then((results) => {
          console.log(results);
          const ogTags = results[0]!.result;
          if (ogTags) {
            setLabel(ogTags.title || '');
            setDescription(ogTags.description || '');
            setImage(ogTags.image || '');
            setContent(ogTags.content || '');
          }
        });
        setCurrentUrl(url);
        setUri(url);
        setType('url');
      }


    });
  }, []);

  const [label, setLabel] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [currentUrl, setCurrentUrl] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const summarize = async () => {
    if (!openai) {
      return;
    }
    try {
      setLoading(true);
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: `Summarize in one paragraph the following website: ${content}` }],
      });
      setDescription(response.choices[0]!.message.content || '');
    } catch (error: any) {
      setDescription(error.message || '');
    }
    setLoading(false);
  };

  async function handleCreateAtom(): Promise<void> {
    if (!uri) {
      return;
    }
    let finalUri = uri;
    setCreatingAtom(true);
    if (type === 'url') {
      setProgressMessage('Uploading to IPFS...');
      const json = {
        '@context': 'https://schema.org',
        '@type': 'Thing',
        name: label,
        description,
        url: currentUrl,
        image: image,
      }
      console.log(json);
      const result = await pinata?.upload.json(json);
      console.log(result);
      if (!result) {
        return;
      }
      finalUri = 'ipfs://' + result.IpfsHash;
    }

    try {
      setProgressMessage('Creating atom...');
      let account: `0x${string}` | undefined = localStorage.getItem('account') as `0x${string}` | undefined;
      if (!account) {
        const accounts = await client?.requestAddresses();
        account = accounts?.[0];
        if (!account) {
          throw new Error('No account found');
        }
        localStorage.setItem('account', account);
      }
      setAccount(account);

      const { hash } = await multivault.createAtom({
        uri: finalUri,
        initialDeposit: parseEther('0.00042'),
      });
      setProgressMessage(undefined);
      console.log(`Transaction hash: ${hash}`);


    } catch (error: any) {
      console.log('Error during deposit:', error.message);
      setErrorMessage(error.message);
      setProgressMessage(undefined);
    }
    setCreatingAtom(false);
  }

  return (
    <div className="bg-slate-950 p-2">
      <div className="flex flex-col p-4 bg-slate-900 rounded-lg">
        <div className="flex items-center space-x-4 mb-3">
          {image && <img src={image} className="w-16 h-16 rounded-full object-cover object-center" />}
          <div>
            <h2
              className="text-xl font-bold text-slate-200"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => setLabel(e.target.innerText)}
            >
              {label}
            </h2>
          </div>
        </div>
        <p
          className="text-sm text-slate-300 mt-2"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => setDescription(e.target.innerText)}
        >
          {description}
        </p>
        {type === 'url' && <button
          className="text-slate-600 hover:text-slate-200"
          onClick={summarize}>
          {loading ? <Spinner /> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 16 16"  ><path fill-rule="evenodd" clip-rule="evenodd" fill='currentColor' d="M7.2757 4.82358C7.57934 4.71847 7.57934 4.53161 7.2757 4.41483L5.62905 3.78419C5.33709 3.67908 4.99842 3.3404 4.88164 3.03676L4.25101 1.39009C4.1459 1.08644 3.95905 1.08644 3.84226 1.39009L3.21163 3.03676C3.10653 3.32872 2.76786 3.6674 2.46422 3.78419L0.817572 4.41483C0.513934 4.51994 0.513934 4.70679 0.817572 4.82358L2.46422 5.45422C2.75618 5.55933 3.09485 5.898 3.21163 6.20165L3.84226 7.84832C3.94737 8.15196 4.13422 8.15196 4.25101 7.84832L4.88164 6.20165C4.98674 5.90968 5.32541 5.571 5.62905 5.45422L7.2757 4.82358ZM15.2991 10.5929C16.2334 10.3593 16.2334 9.9739 15.2991 9.74032L13.2321 9.22647C12.2978 8.9929 11.3402 8.03526 11.1066 7.10097L10.5928 5.03387C10.3592 4.09959 9.97382 4.09959 9.74025 5.03387L9.2264 7.10097C8.99283 8.03526 8.03521 8.9929 7.10094 9.22647L5.03387 9.74032C4.09961 9.9739 4.09961 10.3593 5.03387 10.5929L7.10094 11.1067C8.03521 11.3403 8.99283 12.2979 9.2264 13.2322L9.74025 15.2993C9.97382 16.2336 10.3592 16.2336 10.5928 15.2993L11.1066 13.2322C11.3402 12.2979 12.2978 11.3403 13.2321 11.1067L15.2991 10.5929Z"></path></svg>}
        </button>}
        <div className="flex flex-row mt-3 space-x-1">
          <button
            onClick={handleCreateAtom}
            className={`space-x-1 flex flex-row items-center border border-sky-800 hover:bg-sky-700 text-green-100 text-xs p-1 px-2 rounded-full`}>

            {creatingAtom ? <Spinner /> : <span className="text-sm">✓</span>}
            {progressMessage && <span className="text-sm ml-2">{progressMessage}</span>}

          </button>
          {errorMessage && <span className="text-sm ml-2 text-red-500">{errorMessage}</span>}
        </div>

      </div>
    </div>
  );
};

function extractOpenGraphTags() {

  const title = document.title;
  const domain = document.location.hostname;
  const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
  let image = document.querySelector('meta[property="og:image"]')?.getAttribute('content');

  if (image && !image.startsWith('http')) {
    image = `https://${domain}${image}`;
  }
  // get html content remove javascript
  const content = document.documentElement.outerHTML.replace(/<script[^>]*>[\s\S]*?<\/script>/g, "").replace(/<\/?[^>]+(>|$)/g, "").slice(0, 190000);

  return { title, description, image, content };
}