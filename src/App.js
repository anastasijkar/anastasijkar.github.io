import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLongArrowAltUp,
  faLongArrowAltDown
} from '@fortawesome/free-solid-svg-icons';

import { Switch } from 'styles/common';

import Landing from './components/Landing';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Personal from './components/Personal';

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
      {currentSection !== SECTIONS.LANDING && (<Switch side='top'>
        <FontAwesomeIcon icon={faLongArrowAltUp} />
      </Switch>)}
      <Switch side='bottom' text='learn more'>
        <FontAwesomeIcon icon={faLongArrowAltDown} />
      </Switch>
      <Landing />
      <Experience />
      <Skills />
      <Personal />
    </div>
  );
}

export default App;
