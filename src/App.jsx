import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLiked from "./components/UserLiked";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import Netflix from "./pages/Netflix";
import Player from "./pages/Player";
import SignUp from "./pages/SignUp";
import TVShows from "./pages/TVShows";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signUp" element={<SignUp />}></Route>
        <Route exact path="/play" element={<Player />}></Route>
        <Route exact path="/movies" element={<Movies />}></Route>
        <Route exact path="/tv" element={<TVShows />}></Route>
        <Route exact path="/mylist" element={<UserLiked />}></Route>
        <Route exact path="/" element={<Netflix />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
