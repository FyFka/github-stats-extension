import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { locRegExp } from "./constants";

const root = document.createElement("github-stats-extension");
root.style.display = "block";

const restoreRoot = () => {
  const mainContainer = document.querySelector(".js-profile-editable-replace");
  const isExists = document.querySelector("github-stats-extension");
  if (!locRegExp.test(window.location.href) || !mainContainer || isExists) {
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
