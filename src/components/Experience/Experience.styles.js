import styled from 'styled-components';

import { SectionWrapper } from 'styles/common';
import { textColorMain } from 'styles/theme';
import { EASING, TRANSITION_TIME } from 'styles/animations';

export const ExperienceWrapper = styled(SectionWrapper)`
  padding-top: 3em;
  justify-content: flex-start;
  align-items: center;
`;

export const ExperienceList = styled.div`
  margin: 3.5em auto 0;
  max-width: 500px;
  height: 100%;
`;

export const ExperienceItem = styled.div`
  margin-top: .5em;

  &::after {
    content: '.';
    display: inline-block;
    margin-left: -100%;
  }

  &:last-of-type::after {
    content: none;
  }

  ${props => props.extended && `
  ::after {
    content: none;
  }`}
`;

export const ExperienceHeading = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: .3em 1em;
  border-left: 1px solid;
  cursor: pointer;

  .company-name {
    font-weight: bold;
    font-style: italic;
    margin-bottom: .25em;
    text-decoration: underline;

    small {
      display: inline-block;
      margin-left: .25em;
      transform: scaleX(0);
      transition: transform ${TRANSITION_TIME} ${EASING};

      svg {
        margin-left: .25em;
      }
    }
  }

  .employment-date {
    font-size: .8em;
  }

  .more {
    position: absolute;
    display: inline-block;
    margin-top: 3.75em;
    font-size: .7em;
    opacity: .75;
    transform: scaleY(0);
    transition: transform ${TRANSITION_TIME} ${EASING};
  }

  &:hover {
    .company-name {
      small {
        transform: scaleX(1);
      }
    }
    .more {
      transform: scaleY(1);
    }
  }

  ${props => props.extended && `.company-name {
      small {
        transform: scaleX(1);
      }
    }`
  }
`;

export const ExperienceContent = styled.div`
  font-size: .9em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${props => props.extended ? '.75em' : '0'} 1.1em;
  overflow: hidden;
  max-height: ${props => props.extended ? '9999px' : '0px'};

  p {
    text-align: left;
    margin-bottom: .35em;
    
    em {
      font-style: italic;
      font-weight: bold;
    }
  }

  a {
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
      transition: width ${TRANSITION_TIME} ${EASING};
    }

    &:hover {
      small {
        width: 1.25em;
      }
    }
  }
`;