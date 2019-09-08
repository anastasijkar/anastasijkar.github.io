import React from 'react';
import './App.scss';
import 'reset-css';

import Landing from './components/Landing';
import Employment from './components/Employment';
import Skills from './components/Skills';
import Works from './components/Works';
import Personal from './components/Personal';

function App() {
  return (
    <div className="App">
      <Landing />
      <Employment />
      <Skills />
      <Works />
      <Personal />
    </div>
  );
}

export default App;
