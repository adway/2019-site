import React from 'react';
import styled from 'styled-components';
import theme from '../theme/config';
import Layout from '../components/Layout';

import P from '../components/P';
import { Text, Box } from 'rebass';
import { Link } from '../components/Link';
import { projects } from '../data.json';
import SectionTitle from '../components/SectionTitle';
import Emoji from '../components/Emoji';

const Title = styled(Text)`
  color: ${theme.colors.black};
  font-weight: 600;
  font-size: ${theme.fontSizes[3]}px;
`;
const Desc = styled(Text)`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes[2]}px;
  font-weight: 400;
  margin-top: 0.5em;
`;

const Projects = () => (
  <Layout>
    <SectionTitle> My Work</SectionTitle>
    <P mt={3}>
      My research interests currently lie in understanding substance use
      disorders and mental illnesses. I have presented my work at a variety of
      science competitions, and my work has been published in in various venues
      as well.
    </P>
    <hr></hr>
    <Box mt={3} mb={5}>
      {projects.map(project => (
        <Box mb={4}>
          <Title>{project.name}</Title>
          <Desc mb={2}>{project.description}</Desc>
          <ul>
            {project.papers.map(paper => (
              <li>
                <Link target='_blank' href={`http://${paper.link}`}>
                  {paper.event} Paper
                </Link>{' '}
                {paper.location ? ' - ' + paper.location : ''}
              </li>
            ))}
          </ul>
        </Box>
      ))}
    </Box>
  </Layout>
);

export default Projects;
