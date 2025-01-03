import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";;
import Home from './Pages/HomePage/Home';
import './App.css';
// import About from './Pages/AboutPage/About';
// import Contact from './Pages/ContactPage/Contact';
// import Services from './Pages/ServicesPage/Services';
// import News from './Pages/NewsPage/News';


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/news" element={<News />} /> */}
    </Routes>
  </BrowserRouter>
);