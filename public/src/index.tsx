import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@elastic/eui/dist/eui_theme_light.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
