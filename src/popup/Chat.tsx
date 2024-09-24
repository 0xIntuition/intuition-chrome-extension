import React, { useState, useEffect, useRef } from 'react';
import { Message } from './Message.js';
import OpenAI from 'openai';
import { Spinner } from './Spinner.js';
import { Address, formatEther } from 'viem';
import { useQuery } from '@apollo/client';
import { getThingsExtendedQuery } from './queries.js';
import { useGraphData, defaultSettings } from './GraphDataContext.js';

export const Chat: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [openai, setOpenai] = useState<OpenAI | null>(null);
  const [currentUrl, setCurrentUrl] = useState<string | undefined>(undefined);
  const [account, setAccount] = useState<Address | undefined>(undefined);
  const [messages, setMessages] = useState<Array<{ role: 'system' | 'user' | 'assistant', content: string }>>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { setGraphData } = useGraphData();
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
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const url = tabs[0]!.url;
      const cleanUrl = url?.endsWith('/') ? url?.slice(0, -1) : url;
      setCurrentUrl(cleanUrl);
    });
  }, []);

  useEffect(() => {
    const cachedAccount = localStorage.getItem('account');
    if (cachedAccount) {
      setAccount(cachedAccount as Address);
    }
  }, []);

  const { data, error, refetch, loading } = useQuery(getThingsExtendedQuery, {
    variables: {
      url: currentUrl,
    },
    skip: !currentUrl,
  });

  useEffect(() => {
    if (data ) {
        let nodes: any[] = [];
      let edges: any[] = [];


        // Process things
        data.things?.items.forEach(thing => {
          nodes.push({ id: thing.atomId.toString()});

          // Process atom
          const atom = thing.atom;
          // Process vault
          const vault = atom.vault;
          // Process positions
          vault.positions?.items.forEach(position => {
            nodes.push({ id: position.account.id.toString()});
            edges.push({ id: `${thing.atomId}-${position.account.id}`, from: thing.atomId.toString(), to: position.account.id.toString()});
          });

          // Process asSubject triples
          atom.asSubject?.items.forEach(triple => {
            nodes.push({ id: triple.id.toString() });
            edges.push({ id: `${thing.atomId}-${triple.id}`, from: thing.atomId.toString(), to: triple.id.toString() });

            // Object
            nodes.push({ id: triple.object.id.toString() });
            edges.push({ id: `${triple.id}-${triple.object.id}`, from: triple.id.toString(), to: triple.object.id.toString() });

            // Predicate
            nodes.push({ id: triple.predicate.id.toString() });
            edges.push({ id: `${triple.object.id}-${triple.predicate.id}`, from: triple.object.id.toString(), to: triple.predicate.id.toString() });
            
            // Subject
            edges.push({ id: `${triple.predicate.id}-${thing.atomId}`, from: triple.predicate.id.toString(), to: thing.atomId.toString() });

            // Process counterVault
            const counterVault = triple.counterVault;
            counterVault.positions?.items.forEach(position => {
              nodes.push({ id: position.accountId.toString() });
              edges.push({ id: `${triple.id}-${position.accountId}`, from: triple.id.toString(), to: position.accountId.toString() });
            });

            // Process triple vault
            const tripleVault = triple.vault;
            tripleVault.positions?.items.forEach(position => {
              nodes.push({ id: position.accountId.toString() });
              edges.push({ id: `${triple.id}-${position.accountId}`, from: triple.id.toString(), to: position.accountId.toString() });
            });

          });
        });

        // Make sure all nodes have a unique id
        const uniqueNodes = nodes.filter((node, index, self) =>
          index === self.findIndex((t) => (
            t.id === node.id
          ))
        );

        // Make sure all edges have a unique id
        let uniqueEdges = edges.filter((edge, index, self) =>
          index === self.findIndex((t) => (
            t.id === edge.id
          ))
        );

        // Make sure all edge.from and edge.to are in the nodes array
        uniqueEdges.forEach(edge => {
          if (!uniqueNodes.some(node => node.id === edge.from)) {
            console.error(`Edge ${edge.id} has a from value that is not in the nodes array: ${edge.from}`);
          }
          if (!uniqueNodes.some(node => node.id === edge.to)) {
            console.error(`Edge ${edge.id} has a to value that is not in the nodes array: ${edge.to}`);
          } 
        });

        // Remove edges where from and to are the same
        uniqueEdges = uniqueEdges.filter(edge => edge.from !== edge.to);
        // show_graph("viz", JSON.stringify(nodes), JSON.stringify(edges), JSON.stringify(settings));
        setGraphData({ nodes: uniqueNodes, edges: uniqueEdges, settings: defaultSettings });


    }
  }, [data]);
  useEffect(() => {
    if (data) {
        const usd = data.chainlinkPrices.items[0].usd;
        let systemMessage = 'You are a helpful assistant. Here is the data from the intuition knowledge graph:';
        systemMessage += `\n\n\n`;
        data.things?.items.forEach(thing => {
          systemMessage += `\# ${thing.name}`;
          systemMessage += `\n\n${thing.atom.value?.thing?.description}`;
          systemMessage += `\n\nID: did:i7n:84532:${thing.atomId}`;


          systemMessage += `\n\n\n#### Claims: \n`;
          thing.atom.asSubject?.items.forEach(triple => {
            systemMessage += ` - ${triple.label} \n`;
            //positions
          systemMessage += `  - For (${triple.vault.positionCount}): \n`;
            triple.vault.positions?.items.forEach(position => {
              const inUsd = parseFloat(formatEther(BigInt(position.shares))) * parseFloat(formatEther(BigInt(triple.vault.currentSharePrice))) * usd;
              systemMessage += `    - Position: ${inUsd.toFixed(2)} USD, Account: ${position.accountId} \n`;
            });
            // counterVault
          systemMessage += `  - Against (${triple.counterVault.positionCount}): \n`;
            triple.counterVault.positions?.items.forEach(position => {
              const inUsd = parseFloat(formatEther(BigInt(position.shares))) * parseFloat(formatEther(BigInt(triple.counterVault.currentSharePrice))) * usd;
              systemMessage += `    - Position: ${inUsd.toFixed(2)} USD, Account: ${position.accountId} \n`;
            });
          });
          systemMessage += `\n\n\n`;
        });


        setMessages([
          { role: 'system', content: systemMessage },
          { role: 'assistant', content: 'Hello! How can I help you today?' }
        ])
    }
  }, [data]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setIsLoading(true);

    const newMessages = [...messages, { role: 'user' as const, content: input }];
    setMessages(newMessages);
    setInput('');

    if (!openai) {
      return;
    }
    try {

      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: newMessages,
        max_tokens: 2048
      });
      setMessages([...newMessages, { role: 'assistant', content: response.choices[0].message.content || 'Unable to generate response.' }]);
    } catch (error: any) {
      console.error("Error generating summary:", error);
      return "Error generating summary. " + error;
    }
    setIsLoading(false);
  };


  return (
    <div className="flex flex-col  text-slate-200 relative">
      <div className="flex-1 overflow-y-auto p-2">
        {messages.map((message, index) => (
          <Message key={index} role={message.role as 'user' | 'assistant'} content={message.content}  />
        ))}
        <div ref={messagesEndRef} />
      </div>
      {isLoading && <Spinner />}
      {!isLoading && <form onSubmit={handleSubmit} className="p-2 ">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 bg-slate-900 text-slate-200 rounded focus:outline-none"
          placeholder="Ask a question..."
        />
      </form>}
      {/* <Graph /> */}
    </div>
  );
};
