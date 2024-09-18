// Listen for when the extension icon is clicked
chrome.action.onClicked.addListener((tab) => {
    // Send a message to the content script of the active tab
    chrome.tabs.sendMessage(tab.id!, { action: "getUrl" });
});
