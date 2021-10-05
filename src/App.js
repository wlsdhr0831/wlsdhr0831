import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Home from './routes/Home';
import Component from './routes/Component';
import Navigation from './pages/Navigation';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/component/:id" component={Component} />
    </BrowserRouter>
  );
};

export default App;