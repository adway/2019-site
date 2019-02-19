import React from 'react';
import Layout from '../components/Layout';
import P from '../components/designSystem/P';

import H1 from '../components/designSystem/H1';

import { projects } from '../data';
import Sans from '../components/designSystem/Sans';
import styled from '@emotion/styled';

import Helmet from 'react-helmet';
import { siteInfo } from '../data';

import {
  Atoms,
  PlainList,
  PlainLink
} from '../components/designSystem/designSystem';

const Description = styled(Sans)`
  color: ${Atoms.colors.meta};
  font-size: 0.9em;
`;

const padding = {
  paddingTop: '2em'
};

const page = 'Projects';

export default () => (
  <Layout>
    <Helmet title={siteInfo.title + ' | ' + page} />
    <H1 children="Projects" />
    <P>
      I conduct projects in the area of social science. I have presented my work
      at the Worcester Regional Science and Engineering Fair, the Massachusetts
      State Science and Engineering Fair, and the IEEE Integrated STEM Education
      Conference. I have also been selected as a Broadcom MASTERS semifinalist.
    </P>
    <hr />
    <PlainList>
      {projects.map(project => (
        <div style={padding}>
          <div>
            <PlainLink href={project.link} target="_blank">
              {project.title} {project.date ? '- ' + project.date : ''}
            </PlainLink>
          </div>
          <div>
            <Description>{project.description}</Description>
          </div>
        </div>
      ))}
    </PlainList>
  </Layout>
);
