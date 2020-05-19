import React from 'react';

import { SectionWrapper } from 'styles/common';
import { bgColor1 } from 'styles/theme';

import Photo from 'assets/ph.jpg';

import { Portrait } from './Landing.styles';

const Landing = () => {
  return (
    <SectionWrapper className="landing" bgColor={bgColor1}>
      <h1>hello there (:</h1>
      <Portrait src={Photo} alt="My photo." />
      <p>my name is <strong>Anastasiia</strong>,
        <br />I am a <strong>JavaScript Developer</strong> from planet Earth 
        <br />with 4 years of relevant experience.</p>
    </SectionWrapper>
  );
}

export default Landing;
