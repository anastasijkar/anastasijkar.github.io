import styled from 'styled-components';

import { SectionWrapper, ContentWrapper } from 'styles/common';
import { textColorMain } from 'styles/theme';
import { EASING, TRANSITION_TIME } from 'styles/animations';

export const PersonalWrapper = styled(SectionWrapper)`
  padding-top: 4em;
  padding-bottom: 2em;
  justify-content: flex-start;
  align-items: center;

  h1 {
    margin-bottom: 2em;
  }

  p {
    margin-bottom: 1em;
  }
`;

export const PersonalContent = styled(ContentWrapper)`
  margin: 0em auto;
  max-width: 650px;
  min-width: 0;

  p {
    text-indent: 2em;
    text-align: left;

    em {
      font-style: italic;
    }
  }
`;

export const PersonalContacts = styled.div`
  margin-top: 4em;

  p {
    font-size: 1.1em;
    text-align: center;
    text-indent: 0;
    font-style: italic;
    margin-bottom: .35em;
  }
`;

export const Links = styled.div`
  a {
    font-size: 1.5em;
    display: inline-block;
    margin: 0 .3em;
    color: ${textColorMain};
    opacity: .9;
    transform: scale(1);
    transition: all ${EASING} ${TRANSITION_TIME};

    &:hover {
      opacity: 1;
      transform: scale(1.15);
    }
  }
`;

export const Copyright = styled.footer`
  font-size: .8em;
  opacity: .8;
  margin-top: 7em;

  p {
    margin-bottom: .2em;
    text-align: right;
  }
`;
