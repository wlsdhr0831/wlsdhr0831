import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import styled from 'styled-components';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Navigation from './pages/Navigation';

const Common = styled.div`
  font-family: 'Roboto', sans-serif;
`;

const App = () => {
  return (
    <Common>
      {/* <Navigation /> */}
      <Switch>
        <Route exact path="/main" component={Home}/>
        <Route exact path="/detail/:id" component={Detail}/>
        <Redirect path="*" to="/main"/>
      </Switch>
    </Common>
  );
};

export default App;