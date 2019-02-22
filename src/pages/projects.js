import React from 'react';
import Layout from '../components/Layout';
import P from '../components/designSystem/P';

import H1 from '../components/designSystem/H1';

import { projects } from '../data';
import Serif from '../components/designSystem/Serif';
import styled from '@emotion/styled';

import {
  Atoms,
  PlainList,
  PlainLink
} from '../components/designSystem/designSystem';
import Tab from '../components/designSystem/Tab';

const Description = styled(Serif)`
  color: ${Atoms.colors.duke};
  font-size: 0.9em;
`;

const padding = {
  paddingTop: '2em'
};

export default () => (
  <Layout>
    <Tab page="Projects" />
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
