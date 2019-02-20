import styled from '@emotion/styled';

import Atoms from './atoms';

export default styled('h1')`
  font-family: ${Atoms.font.family.serif};
  font-size: ${Atoms.font.size.h1};
  font-weight: 400;
  hyphens: initial;
  margin-bottom: ${Atoms.spacing.medium};
`;
