import React from 'react';
import styled from 'styled-components';
import theme from '../theme/config';
import Layout from '../components/Layout';

import { Text, Box } from 'rebass';

const P = styled(Text).attrs({ mb: 3 })`
  color: ${theme.colors.black};
  font-weight: 500;
  font-size: ${theme.fontSizes[3]}px;

  line-height: 2;
`;

const Link = styled.a`
  color: ${theme.colors.link};
  text-decoration: none;
  font-weight: 700;
`;

const Footer = styled(Box)`
  font-size: ${theme.fontSizes[0]}px;
  vertical-align: baseline;
  text-align: center;
  color: #000;
  font-weight: 700;
`;

const IndexPage = () => (
  <Layout>
    <P mt={3}>
      Hi, I’m Adway! I’m a rising junior at{' '}
      <Link href="http://www.stjohnshigh.org" target="_blank">
        Saint John’s High School
      </Link>{' '}
      in Shrewsbury, Massachusetts. I am interested in studying the social
      sciences using a quantitative approach.
    </P>
    <P>
      I enjoy learning about various topics, reading the news and taking
      pictures with my Canon Rebel T5. I am an intern at the Town of
      Westborough’s Economic Development Committee. I've just finished
      populating a database with all of the businesses in Westborough. The next
      step is to make the database to usable in managing relations with
      businesses in the Town of Westborough.
    </P>
    <P>
      I am the 2019-2020 Photographer in Residence for the Town of Westborough.
      I document Westborough's history as it happens through photography.
      Specifically, I try to portray daily life through the eyes of young
      children. You can read my vision statement for this project{' '}
      <Link target="_blank" href={require('../assets/Vision.pdf')}>
        here
      </Link>
      .
    </P>
    <P>
      I am also a contributing writer and photographer for the Community
      Advocate Newspaper. I conduct research projects independently and have
      presented a full paper and a poster at the IEEE Integrated STEM Education
      Education Conference. I am truly fortunate to have won regional, state,
      and national awards at multiple science fairs. I am grateful that this
      year, I presented my work at at both the Intel International Science and
      Engineering Fair, and the National Junior Science and Humanities
      Symposium. I will also present a fast abstract (2 page paper) at IEEE
      COMPSAC.
    </P>
    <P mb={3}>
      At school, I am a member of the Saint John's Mock Trial team. I am also a
      member of the French Club, and the Be Like Brit Club.
    </P>
    <Footer>&copy; 2019 Adway S. Wadekar</Footer>
  </Layout>
);

export default IndexPage;
