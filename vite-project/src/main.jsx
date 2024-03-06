/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import { Details } from "./pages/Details/index.jsx";
import { Profile } from "./pages/Profile";
import { GlobalStyles } from './public/global.js'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <Profile />
  </React.StrictMode>
);
