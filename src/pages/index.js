import React from 'react';
import Layout from '../components/Layout';

import { Link } from '../components/Link';
import P from '../components/P';
import SectionTitle from '../components/SectionTitle';
import Emoji from '../components/Emoji';

const IndexPage = () => (
  <Layout>
    <SectionTitle>
      {' '}
      <Emoji label="Work" emoji="📝" /> About Me
    </SectionTitle>
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
      Education Conference. I've also presented my work at Intel ISEF, the
      National JSHS and the IEEE International Computer Software and
      Applications Conference.
    </P>
    <P mb={3}>
      One of my other passions is coding. I've been coding since the 4th grade.
      I've always been facinated with the web specifically, but I love learning
      new technologies regardless of their (potential) application. I enjoy
      running programs to get other students excited about programming and
      making as well. Currently, I'm organizing{' '}
      <Link href="https://codeday.org/boston" target="_blank">
        CodeDay Boston
      </Link>{' '}
      and I'm working on starting a{' '}
      <Link href="https://hackclub.com" target="_blank">
        Hack Club
      </Link>{' '}
      at my school.
    </P>
    <P>
      I regularly update and look at my <Link href="/goals">goals</Link> to help
      me stay on track, stay motivated, work hard, and not procrastinate.
    </P>
  </Layout>
);

export default IndexPage;
