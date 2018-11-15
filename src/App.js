import React, { Component } from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './HomePage.js';
import AboutPage from './AboutPage.js';
import ProductDucks from './pages/ProductDucks.js'

 const App = () => (
  <Router>
    <div>
    <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/ducks" component={ProductDucks} />
    </div>
  </Router>
)

export default App;
