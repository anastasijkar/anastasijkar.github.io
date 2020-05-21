import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTelegramPlane,
  faInstagram,
  faSkype,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';

import { bgColor3 } from 'styles/theme';
import { LinkWithIcon } from 'styles/common';

import {
  PersonalWrapper,
  PersonalContent,
  PersonalContacts,
  Links,
  Copyright,
} from './Personal.styles';

const Personal = () => {
  return (
    <PersonalWrapper id="personal" bgColor={bgColor3}>
      <h1>and a bit more,
      <br />besides programming</h1>
      <PersonalContent>
        <p>I can describe myself as a creative person who gets easily inspired by new things (and even simple things) and is excited about meeting new people. I always try to be <em>patient to anything in my life</em> and keep the <em>positive attitude</em> :)</p>
        <p>When it comes to hobbies, <em>music</em> takes special place in my life. I've been a vocalist in a band for several years, now do songwriting by myself and record music at home. I like to <em>travel</em>, but who doesn't? Top-3 things in this topic for me are: <em>airplanes, discovering new tasty foods, and going to music festivals</em>!</p>
        <p>I am also interested in yoga, cooking, and eco lifestyle.</p>
        <p>Currently I'm <em>24 y.o.</em>, originally from <em>Kharkiv, Ukraine</em>, now living in <em>Poznań, Poland</em>.</p>
        <PersonalContacts>
          <p>Have something to ask? Don't hesitate ;)</p>
          <p>You can find me here:</p>
          <Links>
            <a
              href='mailto:rudich1anastasia@gmail.com' 
              title='Send an email'
              target="_blank"
              rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href='https://join.skype.com/invite/mbTYcJ9cc4hi' 
              alt='Skype'
              target="_blank"
              rel="noopener noreferrer">
                <FontAwesomeIcon icon={faSkype} />
            </a>
            <a
              href='https://www.linkedin.com/in/anastasiia-rudych-263155109/' 
              alt='LinkedIn'
              target="_blank"
              rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href='https://www.instagram.com/anastasijkar/' 
              alt='Instagram'
              target="_blank"
              rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href='https://t.me/anastasijkar' 
              title='Telegram'
              target="_blank"
              rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTelegramPlane} />
            </a>
          </Links>
        </PersonalContacts>
        <Copyright>
          <p>© Anastasiia Rudych</p>
          <p>Last update: 21 May 2020</p>
          <p><LinkWithIcon
              secondary 
              href='https://docs.google.com/document/d/1FdctdoGDEPpyFbZotNM-ca7601Hyd1lji-XzUD_Q05M/edit?usp=sharing'
              target="_blank"
              rel="noopener noreferrer"
            >
              
              Text Version (Google Docs)
              <small><FontAwesomeIcon icon={faExternalLinkAlt} /></small>
            </LinkWithIcon></p>
        </Copyright>
      </PersonalContent>
    </PersonalWrapper>
  );
}

export default Personal;
