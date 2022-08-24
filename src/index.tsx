import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const root = document.createElement("github-stats-extension");
document.body.append(root);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
