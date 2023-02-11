import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Netflix from "./pages/Netflix";
import Player from "./pages/Player";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signUp" element={<SignUp />}></Route>
        <Route exact path="/play" element={<Player />}></Route>
        <Route exact path="/" element={<Netflix />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
