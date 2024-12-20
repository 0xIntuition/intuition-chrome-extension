import React, { useState, useEffect, useRef } from 'react';
import { Message } from './Message.js';
import OpenAI from 'openai';
import { Spinner } from './Spinner.js';
import { Address, formatEther } from 'viem';
import { useQuery, useApolloClient } from '@apollo/client';
import { getAccountInfoQuery, getThingsExtendedQuery } from './queries.js';
import { useGraphData, defaultSettings } from './GraphDataContext.js';
import { z } from "zod";
import { zodFunction } from "openai/helpers/zod";

export const Chat: React.FC = () => {
  const client = useApolloClient();
  const [isLoading, setIsLoading] = useState(false);
  const [openai, setOpenai] = useState<OpenAI | null>(null);
  const [currentUrl, setCurrentUrl] = useState<string | undefined>(undefined);
  const [account, setAccount] = useState<Address | undefined>(undefined);
  const [messages, setMessages] = useState<Array<{ role: 'system' | 'user' | 'assistant', content: string }>>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [progressMessage, setProgressMessage] = useState<string | undefined>(undefined);

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
      setCurrentUrl(url);
    });
  }, []);

  useEffect(() => {
    const cachedAccount = localStorage.getItem('account');
    if (cachedAccount) {
      setAccount(cachedAccount as Address);
    }
  }, []);

  const { data, loading } = useQuery(getThingsExtendedQuery, {
    variables: {
      url: currentUrl,
    },
    skip: !currentUrl,
  });

  useEffect(() => {
    if (data) {
      let nodes: any[] = [];
      let edges: any[] = [];


      // Process things
      data.things?.forEach(thing => {
        nodes.push({ id: thing.id.toString() });

        // Process atom
        const atom = thing.atom;
        // Process vault
        const vault = atom?.vault;
        // Process positions
        vault?.positions?.forEach(position => {
          nodes.push({ id: position.account?.id.toString() });
          edges.push({ id: `${thing.id}-${position.account?.id}`, from: thing.id.toString(), to: position.account?.id.toString() });
        });

        // Process asSubject triples
        atom?.as_subject_triples?.forEach(triple => {
          nodes.push({ id: triple.id.toString() });
          edges.push({ id: `${thing.id}-${triple.id}`, from: thing.id.toString(), to: triple.id.toString() });

          // Object
          nodes.push({ id: triple.object?.id.toString() });
          edges.push({ id: `${triple.id}-${triple.object?.id}`, from: triple.id.toString(), to: triple.object?.id.toString() });

          // Predicate
          nodes.push({ id: triple.predicate?.id.toString() });
          edges.push({ id: `${triple.object?.id}-${triple.predicate?.id}`, from: triple.object?.id.toString(), to: triple.predicate?.id.toString() });

          // Subject
          edges.push({ id: `${triple.predicate?.id}-${thing.id}`, from: triple.predicate?.id.toString(), to: thing.id.toString() });

          // Process counterVault
          const counterVault = triple.counter_vault;
          counterVault?.positions?.forEach(position => {
            nodes.push({ id: position.account?.id.toString() });
            edges.push({ id: `${triple.id}-${position.account?.id}`, from: triple.id.toString(), to: position.account?.id.toString() });
          });

          // Process triple vault
          const tripleVault = triple.vault;
          tripleVault?.positions?.forEach(position => {
            nodes.push({ id: position.account?.id.toString() });
            edges.push({ id: `${triple.id}-${position.account?.id}`, from: triple.id.toString(), to: position.account?.id.toString() });
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
      // const usd = data.chainLinkPrices[0].usd;
      const usd = 3302.34864192; // hardcoded for now
      let systemMessage = 'You are an AI agent embedded in Intuition’s Google Chrome plugin, designed to provide users with concise, helpful insights about the website they are viewing. Your responses should be informed by data from the Intuition Knowledge Graph, including information on related atoms, semantic triples, the origins and reliability of claims, the staked value on each claim, user-generated tags, and any relationships between data points. \n Please follow these guidelines: \n 1. Conciseness: Keep responses short, ideally within 1-2 sentences, while maintaining clarity and helpfulness. \n 2. Contextual Relevance: Use only the most relevant data to answer each question, focusing on website reputation, user safety, related websites, or general sentiment. \n 3. Efficiency: Where possible, synthesize multiple data points into a single insight (e.g., ‘This website is widely considered reliable, with high-stake trust claims and positive safety tags’).\n 4. Do not show long account ids, when listing things.\n\n\n\nHere is the data from the intuition knowledge graph:';
      systemMessage += `\n\n Current user account: ${account} \n\n\n`;

      data.things?.forEach(thing => {
        systemMessage += `\# ${thing.name}`;
        systemMessage += `\n\n${thing.atom?.value?.thing?.description}`;
        systemMessage += `\n\nID: did:i7n:84532:${thing.id}`;
        systemMessage += `\n\n\n#### Claims: \n`;
        thing.atom?.as_subject_triples?.forEach(triple => {
          systemMessage += ` - ${triple.subject.label} ${triple.predicate.label} ${triple.object.label} \n`;
          //positions
          systemMessage += `  - For (${triple.vault?.position_count}): \n`;
          triple.vault?.positions?.forEach(position => {
            const inUsd = parseFloat(formatEther(BigInt(position.shares))) * parseFloat(formatEther(BigInt(triple.vault?.current_share_price))) * usd;
            systemMessage += `    - Position: ${inUsd.toFixed(2)} USD, Label: ${position.account?.label} Account: ${position.account?.id} \n`;
          });
          // counterVault
          systemMessage += `  - Against (${triple.counter_vault?.position_count}): \n`;
          triple.counter_vault?.positions?.forEach(position => {
            const inUsd = parseFloat(formatEther(BigInt(position.shares))) * parseFloat(formatEther(BigInt(triple.counter_vault?.current_share_price))) * usd;
            systemMessage += `    - Position: ${inUsd.toFixed(2)} USD, Label: ${position.account?.label} Account: ${position.account?.id} \n`;
          });
        });
        systemMessage += `\n\n\n`;
      });


      setMessages([
        { role: 'system', content: systemMessage },
        { role: 'assistant', content: 'Hello, what do you want to know about this data?' }
      ])
    }
  }, [data]);


  const getAccountInfo = async ({ account_id }: { account_id: string }) => {
    try {
      const { data } = await client.query({
        query: getAccountInfoQuery,
        variables: {
          address: account_id
        }
      });

      if (!data.account) {
        return "Account not found";
      }
      // const usd = data.chainLinkPrices[0].usd;
      const usd = 3302.34864192; // hardcoded for now:w

      const result = {
        account_id: data.account.id,
        label: data.account.label,
        positions: data.account.positions?.map((position) => {
          return {
            vaultId: position.vault?.id,
            label: position.vault?.atom?.label || `${position.vault?.triple?.subject.label} ${position.vault?.triple?.predicate.label} ${position.vault?.triple?.object.label}`,
            stake: (parseFloat(formatEther(BigInt(position.shares))) * parseFloat(formatEther(BigInt(position.vault?.current_share_price))) * usd).toFixed(2) + " USD",
          }
        }),
      };
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
      return "Account not found";
    }
  }

  const tools = [
    zodFunction({
      function: getAccountInfo,
      name: "getAccountInfo",
      description: "Get account info, such as label, their preferences, their favorites, and their opinions on different subjects.",
      parameters: z.object({
        account_id: z.string().describe("Account ID (ethereum address), example: 0x61d0ef4be9e8a14793001ad33258383dd48618d8"),
      })
    }),
  ];


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
      setProgressMessage("Thinking...");

      const runner = openai.beta.chat.completions.runTools({
        model: "gpt-4o-mini",
        messages: newMessages,
        tools: tools,
        max_tokens: 2048
      })
        .on("connect", () => setProgressMessage("Connecting..."))
        .on("functionCall", (event: any) => {
          console.log("functionCall", event)
          setProgressMessage(`Calling function ${event.name}...`)
        })
        .on("message", () => setProgressMessage("Processing..."))
        .on("finalContent", () => setProgressMessage("Finalizing..."))
        .on("error", (error: any) => console.error(error));

      const finalContent = await runner.finalContent();

      setMessages([...newMessages, { role: 'assistant', content: `${finalContent}` }]);
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
          <Message key={index} role={message.role as 'user' | 'assistant'} content={message.content} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      {(isLoading || loading) && <div className="flex justify-center items-center p-2"><Spinner /> <span className="ml-2">{progressMessage}</span></div>}
      {!isLoading && !loading && <form onSubmit={handleSubmit} className="p-2 ">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 bg-slate-900 text-slate-200 rounded focus:outline-none text-sm"
          placeholder="Ask a question..."
        />
      </form>}
    </div>
  );
};
