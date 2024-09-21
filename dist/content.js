var n=document.createElement("script");n.src=chrome.runtime.getURL("dist/in-page.js");(document.head||document.documentElement).appendChild(n);chrome.runtime.onMessage.addListener((e,s,t)=>{e.type==="FROM_POPUP"&&window.postMessage(e,"*")});window.addEventListener("message",e=>{e.data.type==="FROM_IFRAME"&&chrome.runtime.sendMessage(e.data)});
//# sourceMappingURL=content.js.map
