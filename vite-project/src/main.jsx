/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalStyles } from './public/global.js'

import { Details } from "./pages/Details/index.jsx";
import { Profile } from "./pages/Profile";
import { SignIn } from './pages/SignIn'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <SignIn />
  </React.StrictMode>
);
