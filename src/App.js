// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import JSXDemo from './JSXDemo';
import ParentComponent from './Props/ParentComponent'
import SimpleEffectComponent from './SimpleEffectComponent';
import Counter from './Counter';
import StylesDemo from './StylesDemo';

const App = () => (
  <BrowserRouter>
  <p>Navigation using Link</p>
    <nav>
      <ul>
        {/* Home is imported */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/JSXDemo">JSX</Link></li>
        <li><Link to="/states">States</Link></li>
        <li><Link to="/props">Props</Link></li>
        <li><Link to="/useEffect">useEffect</Link></li>
        <li><Link to="/styles">CSS</Link></li>
      </ul>
    </nav>

    {/* In order to useNavigate, it must be in a lower-level as the router */}
    <p>Navigation using useNavigate</p>
    <Navbar />

    <hr></hr>

    {/* Routes are defined here, Any code above this will persist across the pages */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/JSXDemo" element={<JSXDemo />} />
      <Route path="/states" element={<Counter />} />
      <Route path="/props" element={<ParentComponent />} />
      <Route path="/useEffect" element={<SimpleEffectComponent />} />
      <Route path="/styles" element={<StylesDemo />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default App;
