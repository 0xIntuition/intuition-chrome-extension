chrome.action.onClicked.addListener(e=>{chrome.tabs.sendMessage(e.id,{action:"getUrl"})});
//# sourceMappingURL=background.js.map
