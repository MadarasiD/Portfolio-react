import React from 'react'
import Home from '../pages/Home';
import Skills from '../pages/Skills';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import {Route, Routes, useLocation} from "react-router-dom";

import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {

    const location = useLocation();

  return (
      <AnimatePresence>
        <Routes Location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/Contact" element={<Contact />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes