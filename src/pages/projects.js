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
  font-family: 'KoHo';
  font-weight: 600;
  font-size: ${theme.fontSizes[3]}px;
`;
const Desc = styled(Text)`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes[2]}px;
  font-weight: 500;
  margin-top: 0.5em;
`;

const Projects = () => (
  <Layout>
    <SectionTitle>
      {' '}
      <Emoji label="Rocket" emoji="🚀" /> My Work
    </SectionTitle>
    <P mt={3}>
      I conduct projects in the area of social science. I have presented my work
      at the Worcester Regional Science and Engineering Fair, the Massachusetts
      State Science and Engineering Fair, the International Science and
      Engineering Fair, and the National Junior Science and Humanities
      Symposium. I have presented papers at the IEEE Integrated STEM Education
      Conference, as well as the IEEE International Computer Software and
      Applications Conference. I have also been selected as a Broadcom MASTERS
      semifinalist.
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
                <Link target="_blank" href={`http://${paper.link}`}>
                  {paper.event} Paper
                </Link>{' '}
                - {paper.location}
              </li>
            ))}
          </ul>
        </Box>
      ))}
    </Box>
  </Layout>
);

export default Projects;
