import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExternalLinkAlt,
  faGraduationCap,
  faFileCode,
  faLongArrowAltDown,
} from '@fortawesome/free-solid-svg-icons';
import {
  faNodeJs,
  faReact,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons';

import { bgColor2 } from 'styles/theme';
import { ArrowDown, LinkWithIcon } from 'styles/common';

import {
  ExperienceWrapper,
  ExperienceItem,
  ExperienceHeading,
  ExperienceContent,
  ExperienceList,
} from './Experience.styles';

const EMPLOYMENT_DATA = [{
  title: 'Liki Mobile Solutions',
  icons: [faReact],
  position: 'JS Developer',
  time: 'Dec. 2019 - now',
  content: `<p><em>Responsibilities:</em> working on ongoing and new projects, architecting, coding, & maintaining.</p>
  <p>I have been working mostly on a Frontend part here. Have been involved into several short-term projects, worked as a part of a team or independently.</p>
  <p><em>Tech stack:</em> HTML5, SCSS, ES6+, React/Redux (Redux Saga), Material UI, React Storybook, GraphQL.</p>`,
  link: 'https://likims.com/',
}, {
  title: 'TBWA/ Mobile',
  icons: [faReact, faNodeJs],
  position: 'JS Developer',
  time: 'Jun. 2018 - Dec. 2019',
  content: `<p><em>Responsibilities:</em> working on ongoing and new projects, R&D prototyping, architecting, coding, refactoring & maintaining.</p>
  <p>Here I’ve started as Frontend developer, have put a lot of effort into web animations, developed web games. Later (a. June 2019) was promoted to Full Stack JS & switched to backend development.</p>
  <p><em>Tech stack:</em> HTML5, SCSS, React/Redux, various animation & gaming libraries (such as GSAP, anime.js etc), ES6+; Node.js, Firebase.</p>`,
  link: 'https://www.tbwa-x.com/',
}, {
  title: 'Inn4Science',
  icons: [faVuejs],
  time: 'Mar. 2017 - May. 2018',
  content: `<p><em>Responsibilities:</em> working on ongoing projects, coding, refactoring & maintaining.</p>
  <p>Here I’ve gained a lot of experience in direct communication with customers from all around the world, also was mentoring frontend trainees.</p>
  <p><em>Tech stack:</em> HTML5, CSS3/SASS/SCSS, Angular.js, Vue.js/Vuex, JS, CoffeeScript, TypeScript, ES6, axios, various libraries & styling toolkits.</p>`,
  link: 'https://www.inn4science.com/',
}, {
  title: 'SW Engineering studies',
  icons: [faGraduationCap],
  time: '2013 - 2017, Bachelor\'s degree',
  content: `<p>“Computer Science” faculty, dep. “Software Engineering and Management Information Technologies”.</p>
  <p>
  National Technical University “Kharkiv Polytechnical Institute”</p>`,
}, {
  title: 'Genie Solutions',
  icons: [faFileCode],
  time: 'Apr. 2013 – Sep. 2013',
  content: `<p><em>Responsibilities:</em> creating/correcting html markup.</p>
  <p><em>Tech stack:</em> HTML, CSS.</p>`
}];

const Experience = () => {
  const [currentItem, setCurrentItem] = useState();

  const toggleItem = (index) => {
    if (currentItem === index) {
      setCurrentItem(undefined);
    } else {
      setCurrentItem(index);
    }
  }

  const employmentList = EMPLOYMENT_DATA.map((item, index) => {
    return (
      <ExperienceItem key={`exp-${item.title}`} extended={currentItem === index}>
        <ExperienceHeading onClick={() => toggleItem(index)} extended={currentItem === index}>
          <span
            className="company-name"
          >
            {item.title}
            <small>
              {item.icons.map(icon => <FontAwesomeIcon icon={icon} />)}
            </small>
          </span>
          <span className="employment-date">
            {item.time}
          </span>
          {currentItem === index || <span className='more'>read more...</span>}
        </ExperienceHeading>
        <ExperienceContent extended={currentItem === index}>
          {ReactHtmlParser(item.content)}
          { item.link && (<p>
            <LinkWithIcon 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <small><FontAwesomeIcon icon={faExternalLinkAlt} /></small>
              Company webpage
            </LinkWithIcon>
          </p>)}
        </ExperienceContent>
      </ExperienceItem>
    );
  });

  return (
    <ExperienceWrapper id="experience" bgColor={bgColor2} >
      <h1>Experience</h1>
      <ExperienceList>
        {employmentList}
      </ExperienceList>
      <ArrowDown side='bottom' text='my skills' href='#skills'>
        <FontAwesomeIcon icon={faLongArrowAltDown} />
      </ArrowDown>
    </ExperienceWrapper>
  );
}

export default Experience;
