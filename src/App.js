import React from 'react';
import './App.css';
import Navv from './components/Navv/Navv';
import Main from './components/Main/Main';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Skillset from './components/Skillset/Skillset';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Navv />
      <Main />
      <About />
      <Portfolio />
      <Skillset />
      <Contact />
    </div>
    
  );
}

export default App;
