import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import light from './styles/themes/ligth';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
import Header from './components/Header';

import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { LibraryContextProvider } from './context/libraryContext';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  return ( 
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />

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