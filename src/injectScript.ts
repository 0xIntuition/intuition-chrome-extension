  function createIframe() {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://f3eb113822a0.ngrok.app/static/iframe.html';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    window.addEventListener("message", (event) => {
      if (event.origin === "https://f3eb113822a0.ngrok.app" && event.data.type === "FROM_IFRAME") {
        window.postMessage(event.data, "*");
      }
    });
  }

  createIframe();

  window.addEventListener("message", (event) => {
    if (event.data.type && event.data.type === "FROM_CONTENT_SCRIPT") {
      const iframe = document.querySelector('iframe[src^="https://f3eb113822a0.ngrok.app/static/iframe.html"]');
      if (iframe) {
        (iframe as HTMLIFrameElement).contentWindow?.postMessage(event.data, "https://f3eb113822a0.ngrok.app");
      }
    }
  });
