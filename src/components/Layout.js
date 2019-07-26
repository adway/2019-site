import React from 'react';
import Helmet from 'react-helmet';
import ThemeProvider from '../theme';
import theme from '../theme/config';

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
    {children}
  </ThemeProvider>
);
