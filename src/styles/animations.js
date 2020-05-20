import { keyframes } from 'styled-components';

export const EASING = 'ease-out';
export const TRANSITION_TIME = '.2s';

export const slideLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100vw);
  }
`