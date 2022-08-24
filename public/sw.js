chrome.tabs.onUpdated.addListener((tabId, _, tab) => {
  if (/https:\/\/github.com\/*/.test(tab.url)) {
    chrome.action.setIcon({
      path: {
        16: "./icons/extension-logo-active-16.png",
        32: "./icons/extension-logo-active-32.png",
        48: "./icons/extension-logo-active-48.png",
        128: "./icons/extension-logo-active-128.png",
      },
      tabId,
    });
  }
});
