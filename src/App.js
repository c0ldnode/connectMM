//import logo from './logo.svg';

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages';
import Info from './components/pages/Info';
import Connect from './components/pages/Connect';


function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' exact component={Home} />
      <Route path='/info' component={Info} />
      <Route path='/connect' component={Connect} />
    </Routes>
  </Router>
  );
}

export default App;
