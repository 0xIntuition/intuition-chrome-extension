// Inject the script to interact with the Ethereum wallet
const script = document.createElement('script');
script.src = chrome.runtime.getURL('dist/in-page.js');
(document.head || document.documentElement).appendChild(script);

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "FROM_POPUP") {
    window.postMessage(request, "*");
  }
});

// Listen for messages from the injected script
window.addEventListener("message", (event) => {
  if (event.data.type === "FROM_IFRAME") {
    chrome.runtime.sendMessage(event.data);
  }
});