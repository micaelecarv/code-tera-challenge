import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/ligth';

import { ListBooks } from './components/ListBooks';

import {GlobalStyle} from './styles/global';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Header } from './components/Header';
import GlobalContext from './context/libraryContext';
import { LibraryContextProvider } from './context/libraryContext';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return ( 
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Header />

      <LibraryContextProvider>
        <Router>
          <Switch>
            <Route component={Detail} path="/detail"/>
            <Route component={Home} path="/home"/>  
          </Switch>
        </Router>
      </LibraryContextProvider>

    </ThemeProvider>
  );
}

export default App;