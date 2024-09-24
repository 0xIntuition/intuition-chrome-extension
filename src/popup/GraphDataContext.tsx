import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import init, { show_graph } from "wasm-graph-view";
export { show_graph };

export interface GraphData {
  nodes: { id: string }[];
  edges: { id: string, from: string, to: string }[];
  settings: {
    resolution: [number, number];
    initial_camera_location: [number, number, number];
    clear_color: [number, number, number];
  };
}

export const defaultSettings: GraphData['settings'] = {
  resolution: [342, 128],
  initial_camera_location: [0.0, -7.0, 3.0],
  clear_color: [2.0 / 255.0, 6.0 / 255.0, 23.0 / 255.0]
};

interface GraphDataContextType {
  graphData: GraphData | undefined;
  setGraphData: React.Dispatch<React.SetStateAction<GraphData | undefined>>;
  initialized: boolean;
}

const GraphDataContext = createContext<GraphDataContextType | undefined>(undefined);

export const GraphDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [graphData, setGraphData] = useState<GraphData | undefined>(undefined);
  const [initialized, setInitialized] = useState(false);
  const [graphVisible, setGraphVisible] = useState(false);

  useEffect(() => {
    init().then(() => setInitialized(true));
  }, []);
  useEffect(() => {
    if (graphData && initialized && !graphVisible) {
      setTimeout(() => {
        show_graph("viz", JSON.stringify(graphData.nodes), JSON.stringify(graphData.edges), JSON.stringify(defaultSettings));
      }, 100);
      setGraphVisible(true);
    } else if (graphData && initialized && graphVisible) {
      // TODO: Update graph with new data
    }
  }, [graphData, initialized, graphVisible]);
  return (
    <GraphDataContext.Provider value={{ graphData, setGraphData, initialized }}>
      {children}
    </GraphDataContext.Provider>
  );
};

export const useGraphData = (): GraphDataContextType => {
  const context = useContext(GraphDataContext);
  if (!context) {
    throw new Error('useGraphData must be used within a GraphDataProvider');
  }
  return context;
};
