/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalStyles } from './public/global.js';

import { Details } from "./pages/Details/index.jsx";
import { Profile } from "./pages/Profile";
<<<<<<< HEAD
import { SignIn } from './pages/SignIn/index.jsx';
import { SignUp } from './pages/SignUp/index.jsx';
=======
import { SignIn } from './pages/SignIn/index.jsx'
import { SignUp } from './pages/SignUp/index.jsx'
>>>>>>> refs/remotes/origin/main

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <SignIn />
  </React.StrictMode>
);
