import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(
  (() => {
    const app = document.createElement("div");
    app.id = "body";
    app.className = "bg-secondary";
    document.body.prepend(app);
    return app;
  })(),
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
