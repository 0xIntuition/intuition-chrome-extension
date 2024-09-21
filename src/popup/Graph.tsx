import { useQuery } from '@apollo/client';
import { Address } from 'blo';
import React, { useEffect, useState } from 'react';
import init, { show_graph } from "wasm-graph-view";
import { getThingsExtendedQuery } from './queries';
import OpenAI from 'openai';
import Markdown from 'react-markdown'
const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true
});

async function generateSummary(data: any): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant that summarizes graph data." },
        { role: "user", content: `Summarize the following graph data: ${JSON.stringify(data)}` }
      ],
      max_tokens: 2048
    });

    return response.choices[0].message.content || "Unable to generate summary.";
  } catch (error) {
    console.error("Error generating summary:", error);
    return "Error generating summary.";
  }
}

export const Graph: React.FC = () => {
  const [currentUrl, setCurrentUrl] = useState<string | undefined>(undefined);
  const [account, setAccount] = useState<Address | undefined>(undefined);
  const [summarizing, setSummarizing] = useState<boolean>(false);
  const [summary, setSummary] = useState<string>("");

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
    if (data) {
      console.log(data);
      init().then(async () => {
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
        
        console.log(JSON.stringify(uniqueNodes));
        console.log(JSON.stringify(uniqueEdges));

        show_graph("viz", JSON.stringify(uniqueNodes), JSON.stringify(uniqueEdges));


      }).catch(console.error);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
         // Generate summary
        setSummarizing(true);
        console.log("Generating summary",data);
        const summary = generateSummary(data).then((summary) => {
        console.log("Summary:", summary);
          setSummary(summary);
          setSummarizing(false);
        });
    }
  }, [data]);

  return (
    <div className="p-4">
       <canvas id="viz" className="w-full h-64"></canvas>
       {loading && <p className="text-slate-400">Loading...</p>}
       {summarizing && <p className="text-slate-400">Summarizing...</p>}
      {!summarizing && !loading && <Markdown
        components={{
          img: ({node, ...props}) => <img {...props} style={{maxHeight: '1em'}} />  
        }}
        className="text-slate-200 mt-4">{summary}</Markdown>}

    </div>
  );
};
