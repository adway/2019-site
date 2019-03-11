import React from 'react';
import Helmet from 'react-helmet';
import { siteInfo } from '../../data';
import favicon from '../../../static/assets/favicon.ico';

export default ({ page }) => (
  <Helmet>
    <title>{` ${siteInfo.title} | ${page}`}</title>
    <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
    <meta name="theme-color" content="#000" />
  </Helmet>
);
