import styled from 'styled-components';
import theme from '../theme/config';
import { Text } from 'rebass';

const P = styled(Text).attrs({ mb: 3 })`
  color: ${theme.colors.black};
  font-weight: 400;
  font-size: ${theme.fontSizes[3]}px;
  text-align: justify;
  hyphens: auto;
  // ${theme.mediaQueries.md} {
  //   text-align: left;
  // }
  line-height: 2;
`;

export default P;
