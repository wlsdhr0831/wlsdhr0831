import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter basename="/wlsdhr0831">
      <App/>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('app')
);