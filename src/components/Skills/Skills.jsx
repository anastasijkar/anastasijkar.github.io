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
} from './Skills.styles';

const Skills = () => {
  return (
    <SkillsWrapper className="skills" bgColor={bgColor4}>
      <h1>Skills</h1>
      <ArrowDown side='bottom' text='personal & contacts'>
        <FontAwesomeIcon icon={faLongArrowAltDown} />
      </ArrowDown>
    </SkillsWrapper>
  );
}

export default Skills;
