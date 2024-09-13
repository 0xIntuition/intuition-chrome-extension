document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const currentUrl = tabs[0].url;
    fetchGraphQLData(currentUrl);
  });
});

function openAtom(id) {
  chrome.tabs.create({ url: `https://i7n.app/a/${id}` });
}
async function fetchGraphQLData(url) {
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
    document.getElementById('result').textContent = 'Error fetching data';
  }
}

function displayResult(data) {
  const usd = data.data.chainlinkPrices.items[0].usd;

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';

  if (data.data.things.items.length > 0) {
    const thing = data.data.things.items[0];

    const div = document.createElement('div');

    const totalStaked = parseFloat(formatEther(thing.atom.vault.totalShares))
      * parseFloat(formatEther(thing.atom.vault.currentSharePrice));

    div.innerHTML += `<div class="flex flex-col p-4 bg-slate-700 rounded-lg "><div class="flex items-center space-x-4 mb-3"><img src="${thing.image}" alt="${thing.name}" class="w-16 h-16 rounded-full object-cover object-center"><div><h2 class="text-xl font-bold text-slate-200">${thing.name}</h2><p class="text-sm text-slate-400"> ID: ${thing.atomId}</p></div></div><p class="text-sm text-slate-300 mt-2">${thing.atom.value.thing.description}</p></div>`

    div.innerHTML += `<div class="bg-slate-800 divide-y divide-slate-700 rounded-lg mt-2"><div class="flex items-center justify-between p-4 shadow-sm mt-1"><div class="flex items-center justify-between w-full"><span class="flex items-center"><span class="flex flex-col"><span class="text-md dark:text-slate-300">Staked</span><span class="text-xs dark:text-slate-400">Holders: ${thing.atom.vault.positionCount}</span></span></span><div class="flex-grow flex justify-center"></div><span class="flex flex-col items-end"><span class="text-slate-500 dark:text-slate-400 text-sm" title="${totalStaked.toFixed(6)} ETH">${(totalStaked * usd).toFixed(2)} USD</span></span></div></div></div>`;

    div.innerHTML += `<h1 class="text-xl dark:text-slate-400 mt-4">Tags</h1>`;

    let tagsHTML = `<div class="bg-slate-800 divide-y divide-slate-700 rounded-lg mt-2">`;

    // filter where predicate is id 4
    const tags = thing.atom.asSubject.items.filter((item) => item.predicate.id === '4');


    tags.forEach((tag) => {
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
    div.innerHTML += tagsHTML;

    resultDiv.appendChild(div)

    const button = document.createElement('button');
    button.onclick = () => openAtom(thing.atomId);
    button.textContent = 'Details';
    button.classList.add('text-white', 'py-2', 'px-4', 'mt-4');
    resultDiv.appendChild(button);

  } else {
    resultDiv.innerHTML += `<h1 class="text-xl dark:text-slate-400 mt-4">No data found for this URL</h1>`;

  }

}


function formatEther(wei) {
  // Convert the input to a string in case it's not already
  wei = wei.toString();

  // Handle the case where input is 0
  if (wei === "0") return "0.0";

  // Ensure wei is a valid number
  if (!/^\d+$/.test(wei)) throw new Error("Input should be a positive number in string or number format");

  // Pad the string with leading zeros if necessary
  while (wei.length < 18) {
    wei = "0" + wei;
  }

  // Split the string into integer and decimal parts
  const integerPart = wei.slice(0, wei.length - 18);
  const decimalPart = wei.slice(wei.length - 18);

  // Remove trailing zeros from the decimal part
  const trimmedDecimal = decimalPart.replace(/0+$/, '');

  // Handle no decimals case
  return trimmedDecimal ? `${integerPart}.${trimmedDecimal}` : `${integerPart}.0`;
}
