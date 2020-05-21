import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { textColorMain, mobileBreakpoint } from './theme';
import { EASING, TRANSITION_TIME } from 'styles/animations';

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => props.alignItems || 'flex-start'};
  box-sizing: border-box;
  padding: 0em 8em 6em;
  background-color: ${props => props.bgColor};
  color: ${textColorMain};

  @media (max-width: ${mobileBreakpoint}) {
    padding-left: 3.5em;
    padding-right: 3.5em;
  }
`;

export const ContentWrapper = styled.div`
  width: 50vw;
  min-width: 500px;

  @media (max-width: ${mobileBreakpoint}) {
    min-width: 100%;
  }
`;

export const ArrowDown = styled(AnchorLink)`
  position: absolute;
  font-size: 1.5em;
  color: ${textColorMain};
  left: calc(50vw - .5em);
  bottom: 1em;
  cursor: pointer;
  transition: transform ${TRANSITION_TIME} ${EASING};

  &:hover {
    transform: translateY(-.1em);
  }

  &::after {
    margin-top: -2em;
    margin-left: -5.25em;
    display: inline-block;
    width: 10em;
    position: absolute;
    content: '${props => props.text}';
    font-size: 0.6em;
  }
`;

export const LinkWithIcon = styled.a`
  color: ${textColorMain};
  font-style: italic;
  font-weight: bold;
  font-size: .85em;

  small {
    font-size: .85em;
    line-height: .85em;
    display: inline-block;
    width: 0;
    overflow: hidden;
    transition: all ${TRANSITION_TIME} ${EASING};
  }

  &:hover {
    small {
      width: 1.25em;
    }
  }

  ${props => props.secondary && `
    font-size: 1em;
    font-weight: normal;

    &:hover {
      small {
        width: 3.5em;
        margin-left: -2em;
      }
    }
  `}
`;