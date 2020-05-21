import styled from 'styled-components';

import { SectionWrapper } from 'styles/common';

export const SkillsWrapper = styled(SectionWrapper)`
  padding-top: 4em;
  justify-content: flex-start;
  align-items: center;

  h1 {
    margin-bottom: 2em;
  }
`;

export const SkillsTable = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  flex-direction: column;
  margin-bottom: 4em;
  ${props => props.sub && `font-size: .8em`}
`;

export const SkillsRow = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid;

  &:last-of-type {
    border-bottom: none;
  }
`;

export const SkillsSection = styled.div`
  width: 30%;
  border-right: 1px solid;
  padding: 1.25em 1em;
  text-align: right;
  font-style: italic;
  font-weight: bold;
  word-wrap: break-word;
`;

export const SkillsContent = styled.div`
  width: 70%;
  padding: 1em;
  text-align: left;

  p {
    margin-bottom: .35em;
  }

  small {
    font-size: .8em;
    opacity: .8;
  }
`;