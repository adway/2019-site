import styled from 'styled-components';
import theme from '../theme/config';

import { Heading } from 'rebass';

const SectionTitle = styled(Heading).attrs({ pt: 3 })`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes[4]}px;
`;

export default SectionTitle;
