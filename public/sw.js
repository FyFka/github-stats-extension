chrome.runtime.onMessage.addListener((request, sender) => {
  if (request.type == "active") {
    chrome.action.setIcon({
      path: {
        16: "./icons/extension-active-logo-16.png",
        32: "./icons/extension-active-logo-32.png",
        48: "./icons/extension-active-logo-48.png",
        128: "./icons/extension-active-logo-128.png",
      },
      tabId: sender.tab.id,
    });
  } else if (request.type === "inactive") {
    chrome.action.setIcon({
      path: {
        16: "./icons/extension-logo-16.png",
        32: "./icons/extension-logo-32.png",
        48: "./icons/extension-logo-48.png",
        128: "./icons/extension-logo-128.png",
      },
      tabId: sender.tab.id,
    });
  }
});
