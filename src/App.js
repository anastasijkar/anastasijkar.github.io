import React, { useState } from 'react';

import Landing from 'components/Landing/Landing';
import Experience from 'components/Experience/Experience';
import Skills from 'components/Skills/Skills';
import Personal from 'components/Personal/Personal';

import './reset.css';
import './App.css';

const SECTIONS = {
  LANDING: 'LANDING',
  EXP: 'EXP',
  SKILLS: 'SKILLS',
  PERSONAL: 'PERSONAL',
}

const App = () => {
  const [currentSection, setCurrentSection] = useState(SECTIONS.LANDING);

  return (
    <div className="App">
      <Landing />
      <Experience />
      <Skills />
      <Personal />
    </div>
  );
}

export default App;
