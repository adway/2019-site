import React from 'react';
import Helmet from 'react-helmet';
import { Global } from '@emotion/core';
import { siteInfo } from '../data';
import { Atoms, DesignSystemProvider } from './designSystem/designSystem.js';
import Footer from './Footer';
import Header from './Header';
// import SiteMetadataQuery from 'queries/SiteMetadataQuery';
import Wrapper from './Wrapper';
// import Metatags from './Metatags';

export default function Layout({ children, location, ...props }) {
  // const title =
  //   props.pageContext.frontmatter !== undefined
  //     ? props.pageContext.frontmatter.title
  //     : null;

  return (
    <DesignSystemProvider>
      <Global
        styles={{
          body: {
            backgroundColor: Atoms.colors.wash,
            color: Atoms.colors.text,
            flex: 1,
            paddingLeft: Atoms.spacing.medium,
            paddingRight: Atoms.spacing.medium
          }
        }}
      />
      <React.Fragment>
        <Helmet>
          <title>{siteInfo.title}</title>
          <link
            rel="icon"
            type="image/png"
            href="assets/favicon.ico"
            sizes="16x16"
          />
        </Helmet>
        <Wrapper>
          <Header siteTitle={'Adway S. Wadekar'} />
          <main>{children}</main>
          <Footer
            author={siteInfo.authorName}
            designAuthor={siteInfo.designAuthor}
          />
        </Wrapper>
      </React.Fragment>
    </DesignSystemProvider>
  );
}
