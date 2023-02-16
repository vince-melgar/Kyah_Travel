import React from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Gallery from './components/pages/Gallery';
import Blog from './components/pages/Blog';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>   
      <Home></Home>
      {/* <Routes>
        <Route path="/"element={<Home />} />
        <Route path="/About"element={<About />} />
        <Route path="/Contact"element={<Contact />} />
        <Route path="/Gallery"element={<Gallery />} />
        <Route path="/Blog"element={<Blog />} />
      </Routes> */}
    </>
  )
}

export default App;
