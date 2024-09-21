import { useQuery } from '@apollo/client';
import { Address } from 'blo';
import React, { useEffect, useState } from 'react';
import init, { show_graph } from "wasm-graph-view";
import { getThingsExtendedQuery } from './queries';

export const Graph: React.FC = () => {
  const [currentUrl, setCurrentUrl] = useState<string | undefined>(undefined);
  const [account, setAccount] = useState<Address | undefined>(undefined);

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

  const { data, error, refetch } = useQuery(getThingsExtendedQuery, {
    variables: {
      url: currentUrl,
    },
    skip: !currentUrl,
  });
  console.log(data, error);
  useEffect(() => {
    if (data) {
      console.log(data);
      init().then(() => {
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
            nodes.push({ id: position.account.id});
            edges.push({ id: `${thing.atomId}-${position.account.id}`, from: thing.atomId.toString(), to: position.account.id});
          });

          // Process asSubject triples
          atom.asSubject?.items.forEach(triple => {
            nodes.push({ id: triple.id.toString() });
            edges.push({ id: `${thing.atomId}-${triple.id}`, from: thing.atomId.toString(), to: triple.id.toString() });

            // Object
            nodes.push({ id: triple.object.id });
            edges.push({ id: `${triple.id}-${triple.object.id}`, from: triple.id.toString(), to: triple.object.id.toString() });
            edges.push({ id: `${triple.object.id}-${triple.predicate.id}`, from: triple.object.id.toString(), to: triple.predicate.id.toString() });
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

        // nodes = [{ id: "1"}, { id: "2"}, { id: "3"}];
        // edges = [{ id: "1-2", from: "1", to: "2"}, { id: "2-3", from: "2", to: "3"}];

        console.log(JSON.stringify(nodes), JSON.stringify(edges));
        show_graph("viz", JSON.stringify(nodes), JSON.stringify(edges));
      }).catch(console.error);
    }
  }, [data]);
  return (
    <div className="p-4">
       <canvas id="viz" className="w-full h-64"></canvas>
    </div>
  );
};
