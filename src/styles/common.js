import styled from 'styled-components';

import { textColorMain } from './theme';
import { EASING, slideLeft } from './animations';

export const SectionWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1em 6em;
  background-color: ${props => props.bgColor};
  color: ${textColorMain};
`;

/*animation: 1s ${slideLeft} ${EASING} 1s;*/

const switchProps = {
  right: `
    right: 1em;
    top: calc(50vh - 1em);
    &::after {
      transform: rotate(-90deg);
      margin-left: -4.5em;
    }
  `,
  left: `
    left: 1em;
    top: calc(50vh - 1em);
    &::after {
      transform: rotate(90deg);
    }
  `,
  top: `
    left: calc(50vw - .5em);
    top: 1em;
  `,
  bottom: `
    left: calc(50vw - .5em);
    bottom: 1em;
    &::after {
      margin-top: -2.5em;
      margin-left: -3em;
    }
    
  `,
}

export const Switch = styled.div`
  position: fixed;
  font-size: 1.5em;
  color: ${textColorMain};

  &::after {
    display: inline-block;
    position: absolute;
    content: '${props => props.text}';
    font-size: 0.7em;
  }

  ${props => switchProps[props.side]}
`;