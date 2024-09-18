import React, { useEffect, useState, JSX } from 'react';
import ReactDOM from 'react-dom';
import { formatEther } from 'viem';

interface Thing {
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

interface ChainlinkPrice {
  usd: number;
}

interface GraphQLResponse {
  data: {
    things: {
      items: Thing[];
    };
    chainlinkPrices: {
      items: ChainlinkPrice[];
    };
  };
}

const App: React.FC = () => {
  const [data, setData] = useState<GraphQLResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentUrl = tabs[0].url;
      if (currentUrl) {
        fetchGraphQLData(currentUrl);
      }
    });
  }, []);

  const fetchGraphQLData = async (url: string) => {
    const query = `
      query GetThings($url: String) {
        things(where: { url_starts_with: $url }) {
          items {
            atomId
            url
            name
            image
            atom {
              value {
                thing {
                  description
                }
              }
              vault {
                positionCount
                totalShares
                currentSharePrice
              }
              asSubject {
                items {
                  object {
                    id
                    label
                    emoji
                    image
                  }
                  predicate {
                    emoji
                    label
                    image
                    id
                  }
                  counterVault {
                    positionCount
                    totalShares
                    currentSharePrice
                  }
                  vault {
                    positionCount
                    totalShares
                    currentSharePrice
                  }
                }
              }
            }
          }
        }
        chainlinkPrices(limit: 1, orderBy: "id", orderDirection: "desc") {
          items {
            usd
          }
        }
      }
    `;

    try {
      const cleanUrl = url.endsWith('/') ? url.slice(0, -1) : url;
      const response = await fetch('https://i7n.app/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: query,
          variables: { url: cleanUrl },
        }),
      });

      const data: GraphQLResponse = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error:', error);
      setError('Error fetching data');
    }
  };

  const openAtom = (id: number) => {
    chrome.tabs.create({ url: `https://i7n.app/a/${id}` });
  };

  const deposit = (atomId: number) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id!, { action: "deposit", atomId: atomId });
    });
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const thing = data.data.things.items[0];
  const usd = data.data.chainlinkPrices.items[0].usd;

  if (!thing) {
    return <h1 className="text-xl dark:text-slate-400 mt-4">No data found for this URL</h1>;
  }

  const totalStaked = parseFloat(formatEther(BigInt(thing.atom.vault.totalShares)))
    * parseFloat(formatEther(BigInt(thing.atom.vault.currentSharePrice)));

  const tags = thing.atom.asSubject.items.filter((item) => item.predicate.id === '4');

  return (
    <div className="bg-slate-950 p-4">
      <div className="flex flex-col p-4 bg-slate-700 rounded-lg">
        <div className="flex items-center space-x-4 mb-3">
          <img src={thing.image} alt={thing.name} className="w-16 h-16 rounded-full object-cover object-center" />
          <div>
            <h2 className="text-xl font-bold text-slate-200">{thing.name}</h2>
            <p className="text-sm text-slate-400">ID: {thing.atomId}</p>
          </div>
        </div>
        <p className="text-sm text-slate-300 mt-2">{thing.atom.value.thing.description}</p>
      </div>

      <div className="bg-slate-800 divide-y divide-slate-700 rounded-lg mt-2">
        <div className="flex items-center justify-between p-4 shadow-sm mt-1">
          <div className="flex items-center justify-between w-full">
            <span className="flex items-center">
              <span className="flex flex-col">
                <span className="text-md dark:text-slate-300">Staked</span>
                <span className="text-xs dark:text-slate-400">Holders: {thing.atom.vault.positionCount}</span>
              </span>
            </span>
            <div className="flex-grow flex justify-center"></div>
            <span className="flex flex-col items-end">
              <span className="text-slate-500 dark:text-slate-400 text-sm" title={`${totalStaked.toFixed(6)} ETH`}>
                {(totalStaked * usd).toFixed(2)} USD
              </span>
            </span>
          </div>
        </div>
      </div>

      {tags.length > 0 && (
        <>
          <h1 className="text-xl dark:text-slate-400 mt-4">Tags</h1>
          <div className="bg-slate-800 divide-y divide-slate-700 rounded-lg mt-2">
            {tags.map((tag, index) => {
              const tagTotalStaked = (
                parseFloat(formatEther(BigInt(tag.vault.currentSharePrice))) *
                parseFloat(formatEther(BigInt(tag.vault.totalShares))) +
                parseFloat(formatEther(BigInt(tag.counterVault.currentSharePrice))) *
                parseFloat(formatEther(BigInt(tag.counterVault.totalShares))
                ));

              return (
                <div key={index} className="flex items-center justify-between p-4 shadow-sm mt-1" >
                  <div className="flex items-center justify-between w-full">
                    <span className="flex items-center">
                      <span className="mr-4">
                        <img src={tag.object.image} className="min-w-6 w-6 h-6 rounded-full object-cover object-center" alt={tag.object.label} />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-md dark:text-slate-300">{tag.object.label}</span>
                        <span className="text-xs dark:text-slate-400">
                          Holders: {tag.vault.positionCount.toString()}
                          {tag.counterVault.positionCount ? `, against: ${tag.counterVault.positionCount.toString()}` : ""}
                        </span>
                      </span>
                    </span>
                    <div className="flex-grow flex justify-center"></div>
                    <span className="flex flex-col items-end">
                      <span className="text-slate-500 dark:text-slate-400 text-sm" title={tagTotalStaked.toFixed(6)}>
                        {(tagTotalStaked * usd).toFixed(2)} USD
                      </span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      <div className="mt-4">
        <button onClick={() => openAtom(thing.atomId)} className="text-white py-2 px-4 mr-4">
          Details
        </button>
        <button onClick={() => deposit(thing.atomId)} className="text-white py-2 px-4">
          Deposit
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
