import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Help from './Component/Pages/Help';

export default function App() {
  return (
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Help path="/help" />
    </Router>
  );
}
