import React from 'react';
import PropTypes from 'prop-types';

import { SECTIONS } from 'utils/const';

import {
  NavWrapper,
  NavItem,
  Title,
  CircleInner,
  Circle,
} from './Nav.styles';

const Nav = ({ activeItem }) => {

  return (
    <NavWrapper>
      <NavItem href='#landing' active={activeItem === SECTIONS.landing}>
        <Title>Home</Title>
        <Circle>
          <CircleInner />
        </Circle>
      </NavItem>
      <NavItem href='#experience' active={activeItem === SECTIONS.experience}>
        <Title>Experience</Title>
        <Circle>
          <CircleInner />
        </Circle>
      </NavItem>
      <NavItem href='#skills' active={activeItem === SECTIONS.skills}>
        <Title>Skills</Title>
        <Circle>
          <CircleInner />
        </Circle>
      </NavItem>
      <NavItem href='#personal' active={activeItem === SECTIONS.personal}>
        <Title>Personal</Title>
        <Circle>
          <CircleInner />
        </Circle>
      </NavItem>
    </NavWrapper>
  );
}

Nav.propTypes = {
  activeItem: PropTypes.string.isRequired,
}

export default Nav;
