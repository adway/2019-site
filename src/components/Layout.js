import React from 'react';
import Helmet from 'react-helmet';
import ThemeProvider from '../theme';
import theme from '../theme/config';
import Header from './Header';
import { Container } from './Container';
import styled from 'styled-components';
import { Box } from 'rebass';

const Footer = styled(Box)`
  font-size: ${theme.fontSizes[0]}px;
  vertical-align: baseline;
  text-align: center;
  color: #000;
  font-weight: 700;
`;

export default ({ children }) => (
  <ThemeProvider>
    <Helmet title="Adway Wadekar">
      <html lang="en" />
      <meta charSet="UTF-8" />
      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=KoHo:400,500,600,700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Muli&display=swap"
        rel="stylesheet"
      />

      <link
        rel="icon"
        type="image/png"
        href={require('../assets/favicon.ico')}
        sizes="16x16"
      />
    </Helmet>

    <Container>
      <Header />
      {children}
    </Container>
    <Footer>&copy; 2019 Adway S. Wadekar</Footer>
  </ThemeProvider>
);
