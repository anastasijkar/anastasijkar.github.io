import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { textColorMain, mobileBreakpoint } from 'styles/theme';
import { EASING, LONGER_TRANSITION_TIME } from 'styles/animations';

const CIRCLE_WIDTH = 1.25;

export const CircleInner = styled.span`
  display: inline-block;
  width: ${CIRCLE_WIDTH * .6}em;
  height: ${CIRCLE_WIDTH * .6}em;
  border-radius: 50%;
  background-color: ${textColorMain};
  transition: transform ${LONGER_TRANSITION_TIME} ${EASING};
`;

export const NavWrapper = styled.nav`
  position: fixed;
  right: 2em;
  top: calc(50vh - 4em);
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: ${mobileBreakpoint}) {
    right: 1em;
  }
`;

export const Title = styled.span`
  font-size: .8em;
  font-style: italic;
  font-weight: bold;
  margin-right: .5em;
  transition: transform ${LONGER_TRANSITION_TIME} ${EASING};

  @media (max-width: ${mobileBreakpoint}) {
    display: none;
  }
`;

export const NavItem = styled(AnchorLink)`
  color: ${textColorMain};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: .15em 0;
  text-decoration: none;

  ${CircleInner} {
    transform: ${props => props.active ? 'scale(1)' : 'scale(0)'};
    opacity: ${props => props.active ? '.9' : '.5'};
  }

  ${Title} {
    transform: ${props => props.active ? 'scaleY(1)' : 'scaleY(0)'};
    opacity: ${props => props.active ? '.8' : '.5'};
  }

  &:hover {
    ${CircleInner} {
      transform: scale(1);
    }
  
    ${Title} {
      transform: scaleY(1);
    }
  }
  
  @media (max-width: ${mobileBreakpoint}) {
    margin: .5em 0;
  }
`;

export const Circle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${CIRCLE_WIDTH}em;
  height: ${CIRCLE_WIDTH}em;
  border-radius: 50%;
  border: 1px solid;
  box-sizing: border-box;
`;

