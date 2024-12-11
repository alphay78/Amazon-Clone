import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";


const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found. Check your index.html.");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
