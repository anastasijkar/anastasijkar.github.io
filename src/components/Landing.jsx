import React from 'react';

import { SectionWrapper } from 'styles/common';
import { bgColor1 } from 'styles/theme';

import Photo from 'assets/photo.jpeg';

import { Portrait } from './Landing.styles';

const Landing = () => {
  return (
    <SectionWrapper className="landing" bgColor={bgColor1}>
      <h1>Hello there!</h1>
      <Portrait src={Photo} />
      <p>My name is Anastasiia,
        <br />I am a JavaScript Developer from planet Earth 
        <br />with 4 years of relevant experience.</p>
    </SectionWrapper>
  );
}

export default Landing;
