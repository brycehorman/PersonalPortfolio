import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";
import About from "./components/About.js";
import Navbar from "./components/navbar.js";
import Home from "./components/Home.js"
import Contact from "./components/Contact.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<AllPosts />} path="/AllPosts"/>
        <Route element={<OnePost />} path="/:slug" />
        <Route element={<About />} path="/About" />
        <Route element={<Contact />} path="/Contact"/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;