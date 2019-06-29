import React from 'react';
import './App.css';
import Navv from './components/Navv/Navv';
import Main from './components/Main/Main';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Skillset from './components/Skillset/Skillset';

function App() {
  return (
    <div>
      <Navv />
      <Main />
      <About />
      <Portfolio />
      <Skillset />
    </div>
    
  );
}

export default App;
