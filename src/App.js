import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Home from './routes/Home';
import Component from './routes/Component';
import Navigation from './pages/Navigation';

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/main" >
          <Home/>
        </Route>
        <Route path="/component/:id">
          <Component/>
        </Route>
        <Redirect path="*" to="/main"/>
      </Switch>
    </>
  );
};

export default App;