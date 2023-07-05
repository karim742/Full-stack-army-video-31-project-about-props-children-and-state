import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Help from './Component/Pages/Help';
import Clock from './Component/Pages/Clock';
import Task from './Component/Pages/Task';

export default function App() {
  return (
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Help path="/help" />
      <Clock path="/clock" />
      <Task path="/task" />
    </Router>
  );
}
