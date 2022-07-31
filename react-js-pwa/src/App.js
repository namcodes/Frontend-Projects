import React from "react";
import { Routes, Route } from "react-router-dom";

//Pages
import Home from "./components/Home";
import Post from "./components/Post";

//Styles
import "./styles/App.scss";

const App = () => {
  if(localStorage.getItem("theme") === null){
    localStorage.setItem("theme", "light");
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<Post />} />
      </Routes>
    </>
  );
};

export default App;
