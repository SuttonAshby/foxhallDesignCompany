import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import CustomPage from './pages/CustomPage.js';
import ProductDucks from './pages/ProductDucks.js';
import ProductBoats from './pages/ProductBoats.js';
import ProductChesapeake from './pages/ProductChesapeake.js';
import ProductBay from './pages/ProductBay.js';
import Footer from './components/Footer.js';

 const App = () => (
  <Router>
    <div>
    <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/custom" component={CustomPage} />
      <Route exact path="/ducks" component={ProductDucks} />
      <Route exact path="/boats" component={ProductBoats} />
      <Route exact path="/chesapeake" component={ProductChesapeake} />
      <Route exact path="/bay" component={ProductBay} />
      <Footer />
    </div>
  </Router>
)

export default App;
