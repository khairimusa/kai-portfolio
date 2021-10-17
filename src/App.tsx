import './App.css';
import Hero from './components/hero/Hero';
import TopNavBar from './components/top-nav-bar/TopNavBar';
import Links from './components/links/Links';
import Info from './components/info/Info';

function App() {
  return (
    <div>
      <TopNavBar/>
      <Hero/>
      <Links/>
      <Info/>
    </div>
  );
}

export default App;
