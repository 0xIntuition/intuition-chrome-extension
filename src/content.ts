// Inject the script to interact with the Ethereum wallet
const script = document.createElement('script');
script.src = chrome.runtime.getURL('dist/injectScript.js');
(document.head || document.documentElement).appendChild(script);

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "deposit") {
    window.postMessage({ type: "FROM_CONTENT_SCRIPT", action: "deposit", atomId: request.atomId }, "*");
  }
});

// Listen for messages from the injected script
window.addEventListener("message", (event) => {
  if (event.data.type && event.data.type === "FROM_INJECTED_SCRIPT") {
    chrome.runtime.sendMessage(event.data);
  }
});