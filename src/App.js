import React, { useState, useEffect } from 'react';

import Landing from 'components/Landing/Landing';
import Experience from 'components/Experience/Experience';
import Skills from 'components/Skills/Skills';
import Personal from 'components/Personal/Personal';
import Nav from 'components/Nav/Nav';

import { SECTIONS } from 'utils/const';

import './reset.css';
import './App.css';

const App = () => {
  const [currentSection, setCurrentsection] = useState(SECTIONS.landing);

  const getPosition = (sectionId) => {
    return document.getElementById(sectionId).offsetTop - (window.innerHeight * 0.4);
  }

  const locate = () => {
    if (window.scrollY >= getPosition(SECTIONS.personal)) {
      setCurrentsection(SECTIONS.personal);
    } else if (window.scrollY >= getPosition(SECTIONS.skills)) {
      setCurrentsection(SECTIONS.skills);
    } else if (window.scrollY >= getPosition(SECTIONS.experience)) {
      setCurrentsection(SECTIONS.experience);
    } else {
      setCurrentsection(SECTIONS.landing);
    }
  }

  useEffect(() => {
    locate();
    window.addEventListener('scroll', () => {
      locate();
    }, false);
  });

  return (
    <div className="App">
      <Nav activeItem={currentSection} />
      <Landing />
      <Experience />
      <Skills />
      <Personal />
    </div>
  );
}

export default App;
