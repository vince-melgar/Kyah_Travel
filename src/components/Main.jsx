import React from "react";
//import components here
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const Main = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </div>
  );
};
export default Main;
