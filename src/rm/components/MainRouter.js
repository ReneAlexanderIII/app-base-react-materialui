import React from 'react';

import { Router } from "@reach/router";

import AboutPage from './AboutPage';
import DemoPage from './DemoPage';
import HomePage from './HomePage';
import MainNotFound from './MainNotFound';

export default function MainRouter() {

  return (
    <Router>
      <HomePage
        pageTitle="Home" 
        path="/" />
      <AboutPage path="/about" />
      <DemoPage path="/demo" />
      <MainNotFound default />
    </Router>
  );
}