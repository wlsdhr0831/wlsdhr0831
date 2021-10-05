import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Home from './routes/Home';
import Component from './routes/Component';
import Navigation from './pages/Navigation';

const App = () => {
  return (
    <>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/component/:id">
        <Component/>
      </Route>
    </>
  );
};

export default App;