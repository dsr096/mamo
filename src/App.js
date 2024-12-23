import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Product from './components/product';
import Contact from './components/contact';
import Scrollbar from './components/scrollbar';

function App() {
  return (
    <HashRouter>
      <Scrollbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
