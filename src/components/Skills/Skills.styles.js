import styled from 'styled-components';

import { SectionWrapper } from 'styles/common';

export const SkillsWrapper = styled(SectionWrapper)`
  padding-top: 3em;
  justify-content: flex-start;
  align-items: center;
`;

export const SkillsTable = styled.div`
  display: flex;
  max-width: 500px;
  flex-direction: column;
  border-bottom: 1px solid;
`;

export const SkillsRow = styled.div`
  display: flex;
  flex-direction: row;
`;