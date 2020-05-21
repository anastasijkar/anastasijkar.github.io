import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLongArrowAltDown,
} from '@fortawesome/free-solid-svg-icons';

import { bgColor4 } from 'styles/theme';
import { ArrowDown } from 'styles/common';

import {
  SkillsWrapper,
  SkillsTable,
  SkillsRow,
  SkillsSection,
  SkillsContent,
} from './Skills.styles';

const Skills = () => {
  return (
    <SkillsWrapper id="skills" bgColor={bgColor4}>
      <h1>Skills</h1>
      <SkillsTable>
        <SkillsRow>
          <SkillsSection>
            markup
          </SkillsSection>
          <SkillsContent>
            <p>HTML5, CSS3, SCSS/SASS, Responsive Styling</p>
            <p>various libraries & styling toolkits</p>
          </SkillsContent>
        </SkillsRow>
        <SkillsRow>
          <SkillsSection>
            JS & more
          </SkillsSection>
          <SkillsContent>
            <p>ECMAScript 6+, React/Redux, Vue.js/Vuex</p>
            <p>Node.js, Firebase, GraphQL</p>
            <p><small>Angular, Typescript</small></p>
            <p>Chrome Extension Development</p>
          </SkillsContent>
        </SkillsRow>
        <SkillsRow>
          <SkillsSection>
            tools
          </SkillsSection>
          <SkillsContent>
            <p>Gulp, Webpack</p>
            <p>ESLint</p>
            <p>Git</p>
          </SkillsContent>
        </SkillsRow>
        <SkillsRow>
          <SkillsSection>
            unit testing
          </SkillsSection>
          <SkillsContent>
            <p>Jest + Enzyme, Mocha, react-testing-library</p>
          </SkillsContent>
        </SkillsRow>
        <SkillsRow>
          <SkillsSection>
            other
          </SkillsSection>
          <SkillsContent>
            <p>Jira (+ other Atlassian products)</p>
            <p>Photoshop, inVision, Sketch etc.</p>
          </SkillsContent>
        </SkillsRow>
      </SkillsTable>
      <SkillsTable sub>
        <SkillsRow>
          <SkillsSection>
            languages
          </SkillsSection>
          <SkillsContent>
            <p>Ukrainian, Russian - mother tongues</p>
            <p>English - fluent</p>
            <p>Polish - intermediate+</p>
            <p>German - beginner</p>
          </SkillsContent>
        </SkillsRow>
      </SkillsTable>
      <ArrowDown side='bottom' text='personal & contacts' href='#personal'>
        <FontAwesomeIcon icon={faLongArrowAltDown} />
      </ArrowDown>
    </SkillsWrapper>
  );
}

export default Skills;
