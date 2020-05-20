import styled from 'styled-components';

import { textColorMain } from './theme';

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => props.alignItems || 'flex-start'};
  box-sizing: border-box;
  padding: 0 2em 6em;
  background-color: ${props => props.bgColor};
  color: ${textColorMain};
`;

export const ArrowDown = styled.div`
  position: absolute;
  font-size: 1.5em;
  color: ${textColorMain};
  left: calc(50vw - .5em);
  bottom: 1em;

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