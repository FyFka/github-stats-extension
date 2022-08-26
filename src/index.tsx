import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { locRegExp } from "./constants";

const root = document.createElement("div");

const restoreRoot = () => {
  const mainContainer = document.querySelector("#js-pjax-container");
  if (!locRegExp.test(window.location.href) || !mainContainer) {
    return;
  }

  mainContainer.append(root);
};

(() => {
  if (document.readyState !== "loading") {
    restoreRoot();
  }
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  document.addEventListener("pjax:end", restoreRoot);
  document.addEventListener("turbo:render", restoreRoot);
})();
