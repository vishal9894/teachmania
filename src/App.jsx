import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayou from "./layout/HomeLayou";
import Home from "./pages/Home";
import Aboutas from "./pages/Aboutas";
import Carrier from "./pages/Carrier";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact ";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayou />}>
        <Route index element={<Home />} />
        <Route path="about" element={<Aboutas />} />
        <Route path="career" element={<Carrier />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
