import React from 'react';
import styled from '@emotion/styled';

import Atoms from './designSystem/atoms';
import PlainList from './designSystem/PlainList';
import PlainLink from './designSystem/PlainLink';

const StyledHeader = styled('header')`
  font-family: ${Atoms.font.family.serif};
  font-size: ${Atoms.font.size.regular};
  border-bottom: 1px solid;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: ${Atoms.spacing.medium};
  padding-top: ${Atoms.spacing.medium};
`;

const StyledNav = styled('nav')`
  li + li {
    margin-left: ${Atoms.spacing.xsmall};
  }
`;

const HomeLink = styled(PlainLink)`
  margin-right: ${Atoms.spacing.medium};
`;

const links = [
  {
    to: '/',
    label: 'About'
  },
  {
    to: '/projects',
    label: 'Projects'
  }
];

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <HomeLink to="/">{siteTitle}</HomeLink>

    <StyledNav>
      <PlainList inline={true}>
        {links.map(({ to, label }) => (
          <li key={to}>
            <PlainLink to={to}>{label}</PlainLink>
          </li>
        ))}
      </PlainList>
    </StyledNav>
  </StyledHeader>
);

export default Header;
