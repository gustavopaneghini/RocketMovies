import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CreateMovie } from "./pages/CreateMovie";
import { Home } from "./pages/Home";
import { MoviePreview } from "./pages/MoviePreview";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Profile } from "./pages/Profile";
import { NewMovie } from "./pages/NewMovie";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/createMovie" element={<CreateMovie />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/moviePreview" element={<MoviePreview />}></Route>
        <Route path="/newMovie" element={<NewMovie />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
