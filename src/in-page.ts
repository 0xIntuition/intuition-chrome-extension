// Create an invisible iframe to communicate with i7n.app
const iframe = document.createElement('iframe');
iframe.src = 'https://i7n.app/static/iframe.html';
iframe.style.display = 'none';
document.body.appendChild(iframe);

// Set up a message event listener
window.addEventListener("message", (event) => {
  // Handle messages from the popup
  if (event.data.type === "FROM_POPUP") {
    // Find the iframe we created earlier
    const iframe = document.querySelector('iframe[src^="https://i7n.app/static/iframe.html"]');
    if (iframe) {
      // Forward the message from the popup to the iframe
      (iframe as HTMLIFrameElement).contentWindow?.postMessage(event.data, "https://i7n.app");
    }
  } 
  // Handle messages from the iframe
  else if (event.origin === "https://i7n.app" && event.data.type === "FROM_IFRAME") {
    // Forward the message from the iframe to the window
    window.postMessage(event.data, "*");
  }
});
