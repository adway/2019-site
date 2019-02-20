import React from 'react';
import styled from '@emotion/styled';

const StyledWrapper = styled('div')`
  box-sizing: initial;
  margin: 0 auto;
  max-width: 45rem;
`;

export default function Wrapper(props) {
  return <StyledWrapper {...props} />;
}
