import {formatEther} from 'viem'

document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const currentUrl = tabs[0].url;
    if (currentUrl) {
      fetchGraphQLData(currentUrl);
    }
  });
});

function openAtom(id: number) {
  chrome.tabs.create({ url: `https://i7n.app/a/${id}` });
}
async function fetchGraphQLData(url: string) {
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
          positions(orderBy: "shares", orderDirection: "desc", limit: 5) {
            items {
              shares
              account {
                image
                label
              }
            }
          }
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
              positions(orderBy: "shares", orderDirection: "desc", limit: 5) {
                items {
                  shares
                  account {
                    image
                    label
                  }
                }
              }
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
}  `;

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

    const data = await response.json();
    displayResult(data);
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('result')!.textContent = 'Error fetching data';
  }
}

function displayResult(data: any) {
  const usd = data.data.chainlinkPrices.items[0].usd;

  const resultDiv = document.getElementById('result');
  if (!resultDiv) {
    console.error('Result div not found');
    return;
  }
  resultDiv.innerHTML = '';

  if (data.data.things.items.length > 0) {
    const thing = data.data.things.items[0];

    const div = document.createElement('div');

    const totalStaked = parseFloat(formatEther(thing.atom.vault.totalShares))
      * parseFloat(formatEther(thing.atom.vault.currentSharePrice));

    div.innerHTML += `<div class="flex flex-col p-4 bg-slate-700 rounded-lg "><div class="flex items-center space-x-4 mb-3"><img src="${thing.image}" alt="${thing.name}" class="w-16 h-16 rounded-full object-cover object-center"><div><h2 class="text-xl font-bold text-slate-200">${thing.name}</h2><p class="text-sm text-slate-400"> ID: ${thing.atomId}</p></div></div><p class="text-sm text-slate-300 mt-2">${thing.atom.value.thing.description}</p></div>`

    div.innerHTML += `<div class="bg-slate-800 divide-y divide-slate-700 rounded-lg mt-2"><div class="flex items-center justify-between p-4 shadow-sm mt-1"><div class="flex items-center justify-between w-full"><span class="flex items-center"><span class="flex flex-col"><span class="text-md dark:text-slate-300">Staked</span><span class="text-xs dark:text-slate-400">Holders: ${thing.atom.vault.positionCount}</span></span></span><div class="flex-grow flex justify-center"></div><span class="flex flex-col items-end"><span class="text-slate-500 dark:text-slate-400 text-sm" title="${totalStaked.toFixed(6)} ETH">${(totalStaked * usd).toFixed(2)} USD</span></span></div></div></div>`;


    let tagsHTML = `<div class="bg-slate-800 divide-y divide-slate-700 rounded-lg mt-2">`;

    // filter where predicate is id 4
    const tags = thing.atom.asSubject.items.filter((item: any) => item.predicate.id === '4');

    if (tags.length > 0) {

      tags.forEach((tag: any) => {
        tagsHTML += `<div class="flex items-center justify-between p-4 shadow-sm mt-1"><div class="flex items-center justify-between w-full"><span class="flex items-center"><span class="mr-4"><img src="${tag.object.image}" class="min-w-6 w-6 h-6 rounded-full object-cover object-center"></span><span class="flex flex-col"><span class="text-md dark:text-slate-300">${tag.object.label}</span><span class="text-xs dark:text-slate-400">Holders: ${tag.vault.positionCount.toString()} ${tag.counterVault.positionCount ? `, aginst: ${tag.counterVault.positionCount.toString()}` : ""}</span></span></span><div class="flex-grow flex justify-center"></div><span class="flex flex-col items-end"><span class="text-slate-500 dark:text-slate-400 text-sm" title="${(
          (parseFloat(formatEther(tag.vault.currentSharePrice))
            * parseFloat(formatEther(tag.vault.totalShares))
          )
          +
          (parseFloat(formatEther(tag.counterVault.currentSharePrice))
            * parseFloat(formatEther(tag.counterVault.totalShares))
          )
        ).toFixed(6)}">${(
          (parseFloat(formatEther(tag.vault.currentSharePrice))
            * parseFloat(formatEther(tag.vault.totalShares))
            * usd)
          +
          (parseFloat(formatEther(tag.counterVault.currentSharePrice))
            * parseFloat(formatEther(tag.counterVault.totalShares))
            * usd)
        ).toFixed(2)} USD</span></span></div></div>`;
      });

      tagsHTML += `</div>`;
      div.innerHTML += `<h1 class="text-xl dark:text-slate-400 mt-4">Tags</h1>`;
      div.innerHTML += tagsHTML;
    }

    resultDiv.appendChild(div)

    const button = document.createElement('button');
    button.onclick = () => openAtom(thing.atomId);
    button.textContent = 'Details';
    button.classList.add('text-white', 'py-2', 'px-4', 'mt-4');
    resultDiv.appendChild(button);

    const depositButton = document.createElement('button');
    depositButton.onclick = () => deposit(thing.atomId);
    depositButton.textContent = 'Deposit';
    depositButton.classList.add('text-white', 'py-2', 'px-4', 'mt-4', 'ml-4');
    resultDiv.appendChild(depositButton);

  } else {
    resultDiv.innerHTML += `<h1 class="text-xl dark:text-slate-400 mt-4">No data found for this URL</h1>`;

  }

}

async function deposit(atomId: number) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id!, { action: "deposit", atomId: atomId });
  });
}
