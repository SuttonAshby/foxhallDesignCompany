import React, { Component } from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './HomePage.js';
import AboutPage from './AboutPage.js';
import ProductDucks from './pages/ProductDucks.js';
import ProductBoats from './pages/ProductBoats.js';
import ProductChesapeake from './pages/ProductChesapeake.js';

 const App = () => (
  <Router>
    <div>
    <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/ducks" component={ProductDucks} />
      <Route exact path="/boats" component={ProductBoats} />
      <Route exact path="/chesapeake" component={ProductChesapeake} />
    </div>
  </Router>
)

export default App;
