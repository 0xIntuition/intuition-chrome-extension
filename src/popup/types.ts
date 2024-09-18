export interface Thing {
  atomId: number;
  url: string;
  name: string;
  image: string;
  atom: {
    value: {
      thing: {
        description: string;
      };
    };
    vault: {
      positionCount: number;
      totalShares: string;
      currentSharePrice: string;
    };
    asSubject: {
      items: Array<{
        object: {
          id: string;
          label: string;
          emoji: string;
          image: string;
        };
        predicate: {
          emoji: string;
          label: string;
          image: string;
          id: string;
        };
        counterVault: {
          positionCount: number;
          totalShares: string;
          currentSharePrice: string;
        };
        vault: {
          positionCount: number;
          totalShares: string;
          currentSharePrice: string;
        };
      }>;
    };
  };
}

export interface ChainlinkPrice {
  usd: number;
}

export interface GraphQLResponse {
  data: {
    things: {
      items: Thing[];
    };
    chainlinkPrices: {
      items: ChainlinkPrice[];
    };
  };
}