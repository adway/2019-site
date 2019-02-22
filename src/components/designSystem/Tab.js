import React from 'react';
import Helmet from 'react-helmet';
import { siteInfo } from '../../data';

export default ({ page }) => (
  <Helmet>
    <title>{` ${siteInfo.title} | ${page}`}</title>
    <link rel="icon" type="image/png" href="assets/favicon.ico" sizes="16x16" />
  </Helmet>
);
