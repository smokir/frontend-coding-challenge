import styled from 'styled-components';

import theme from 'theme';

const Grid = styled.div`
  display: grid;
  grid-gap: ${theme.spacing(6)};
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

export default Grid;
