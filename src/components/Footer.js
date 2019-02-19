import React from 'react';
import styled from '@emotion/styled';

import Atoms from './designSystem/atoms';

const StyledFooter = styled('footer')`
  border-top: 1px solid;
  color: ${Atoms.colors.meta};
  font-family: ${Atoms.font.family.sans};
  font-size: ${Atoms.font.size.small};
  margin-top: ${Atoms.spacing.large};
  padding: ${Atoms.spacing.small} 0;
`;

export default function Footer({ author, designAuthor }) {
  return (
    <StyledFooter>
       &copy; {new Date().getUTCFullYear()} {author}
    </StyledFooter>
  );
}
