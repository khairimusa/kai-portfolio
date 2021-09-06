import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './components/hero/Hero';
import TopNavBar from './components/top-nav-bar/TopNavBar';


function App() {
  return (
    <div>
      <TopNavBar/>
      <Hero/>
    </div>
  );
}

export default App;
