import React, { useState } from 'react';
import './App.css';
import Hero from './components/hero/Hero';
import TopNavBar from './components/top-nav-bar/TopNavBar';
import styled,{ThemeProvider} from "styled-components";
import {lightTheme, darkTheme, GlobalStyles} from './theme';


const StyledApp = styled.div ``;

function App() {
  const [theme, setTheme] = useState("dark");
  const themeToggler = function() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }
  return (
    <ThemeProvider theme={theme === "light" ?  lightTheme : darkTheme }>
      <StyledApp>
        <TopNavBar/>
        <Hero/>
      </StyledApp>
    </ThemeProvider>

  );
}

export default App;
