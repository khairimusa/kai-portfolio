import React, { useState } from 'react';
import './App.css';
import Hero from './components/hero/Hero';
import TopNavBar from './components/top-nav-bar/TopNavBar';
import styled,{ThemeProvider} from "styled-components";
import {lightTheme, darkTheme} from './theme';
import Links from './components/links/Links';
import Info from './components/info/Info';


const StyledApp = styled.div ``;

function App() {
  const [theme, setTheme] = useState("dark");
  // eslint-disable-next-line
  const themeToggler = function() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }
  return (
    <ThemeProvider theme={theme === "light" ?  lightTheme : darkTheme }>
      <StyledApp>
        <TopNavBar/>
        <Hero/>
        <Links/>
        <Info/>
      </StyledApp>
    </ThemeProvider>

  );
}

export default App;
