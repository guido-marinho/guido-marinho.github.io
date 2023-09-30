import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/:links" element={<Home />} />
      <Route exact path="/:about" element={<Home />} />
      <Route exact path="/:projects" element={<Home />} />
      <Route exact path="/:contact" element={<Home />} />
    </Routes>
  );
}

