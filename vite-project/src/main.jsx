import React from "react";
import ReactDOM from "react-dom/client";
import { Details } from "./pages/Details/index.jsx";
import { GlobalStyles } from './public/global.js'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <Details />
  </React.StrictMode>
);
