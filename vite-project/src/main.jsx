/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalStyles } from './public/global.js';

import { Details } from "./pages/Details/index.jsx";
import { Profile } from "./pages/Profile";
import { SignIn } from './pages/SignIn/index.jsx';
import { SignUp } from './pages/SignUp/index.jsx';
import { NewMovie } from './pages/NewMovie';
import { CreateMovie } from './pages/CreateMovie';
import { MoviePreview } from './pages/MoviePreview';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <MoviePreview />
  </React.StrictMode>
);
