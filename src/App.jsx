import React from 'react';
import { Route, Routes } from 'react-router-dom';

import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Feed from './pages/Feed.jsx';
import Links from './pages/Links.jsx';
import Projects from './pages/Projects.jsx';

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Feed />} />
      <Route exact path="/links" element={<Links />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
  );
}

