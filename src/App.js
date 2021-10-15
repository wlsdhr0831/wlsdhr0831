import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Detail';
import Navigation from './pages/Navigation';

const App = () => {
  return (
    <>
      {/* <Navigation /> */}
      <Switch>
        <Route exact path="/main" component={Home}/>
        <Route exact path="/detail/:id" component={Detail}/>
        <Redirect path="*" to="/main"/>
      </Switch>
    </>
  );
};

export default App;