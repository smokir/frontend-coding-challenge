import styled from 'styled-components';

import theme from 'theme';

import H6 from 'components/H6';

export const Title = styled(H6)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  background-color: ${theme.palette.background.base};
  padding: ${theme.spacing(4)};
  border-radius: ${theme.borderRadius};
`;

export const Actions = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-gap: ${theme.spacing(2)};
  margin-top: ${theme.spacing(2)};
`;
