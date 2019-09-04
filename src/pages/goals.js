import React from 'react';
import theme from '../theme/config';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import Emoji from '../components/Emoji';
import P from '../components/P';

import { Box, Text } from 'rebass';

import { goals } from '../data.json';

const Title = styled(Text)`
  color: ${theme.colors.black};
  font-weight: 600;
  font-size: ${theme.fontSizes[2]}px;
`;

const Goals = () => (
  <Layout>
    <SectionTitle>
      <Emoji label="Goals" emoji="💡" />
      2019-2020 Goals
    </SectionTitle>
    <P mt={3}>
      With the 2019-2020 school year, I've decided to create and maintain a list
      of current goals. I think it's important for me to write down things that
      I want to do, so that I have something to motivate me when I don't want to
      be productive.
    </P>
    <hr />

    <Box mt={3} mb={5}>
      {goals.map(goal => (
        <Box mb={3}>
          <Title> - {goal.name}</Title>
        </Box>
      ))}
    </Box>
  </Layout>
);

export default Goals;
