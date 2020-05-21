import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLongArrowAltDown
} from '@fortawesome/free-solid-svg-icons';

import { SectionWrapper, ArrowDown } from 'styles/common';
import { bgColor1 } from 'styles/theme';

import Photo from 'assets/ph.jpg';

import { Portrait } from './Landing.styles';

const Landing = () => {
  return (
    <SectionWrapper id="landing" bgColor={bgColor1} alignItems='center'>
      <h1>hello there (:</h1>
      <Portrait src={Photo} alt="My photo." />
      <p>my name is <strong>Anastasiia</strong>,
        <br />I am a <strong>JavaScript Developer</strong> from planet Earth 
        <br />with 4 years of relevant experience.</p>
      <ArrowDown side='bottom' text='learn more' href='#experience'>
        <FontAwesomeIcon icon={faLongArrowAltDown} />
      </ArrowDown>
    </SectionWrapper>
  );
}

export default Landing;
