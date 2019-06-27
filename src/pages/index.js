import React from 'react';
import Layout from '../components/Layout';
import P from '../components/designSystem/P';
import Link from '../components/designSystem/Link';
import H1 from '../components/designSystem/H1';
import Tab from '../components/designSystem/Tab';

export default () => (
  <Layout>
    <Tab page="About" />
    <H1>About</H1>
    <P>
      Hi, I’m Adway! I’m a rising junior at{' '}
      <Link href="http://www.stjohnshigh.org/" target="_blank">
        Saint John’s High School
      </Link>{' '}
      in Shrewsbury, Massachusetts. I am interested in studying the social
      sciences using a quantitative approach. Feel free to view my résumé{' '}
      <Link href="/Resume.pdf" target="_blank">
        here
      </Link>
      .
    </P>
    <P>
      I enjoy learning about various topics, reading the news and taking
      pictures with my Canon Rebel T5. I am an intern at the{' '}
      <Link href="http://edc.town.westborough.ma.us" target="_blank">
        Town of Westborough’s Economic Development Committee
      </Link>
      . I've just finished populating a database with all of the businesses in
      Westborough. The next step is to make the database to usable in managing
      relations with businesses in the Town of Westborough.
    </P>
    <P>
      I am the 2019-2020 Photographer in Residence for the Town of Westborough.
      I document Westborough's history as it happens through photography.
      Specifically, I try to portray daily life through the eyes of young
      children. You can read my vision statement for this project{' '}
      <Link href="/Vision.pdf" target="_blank">
        here
      </Link>
      .
    </P>
    <P>
      I am also a contributing writer and photographer for the{' '}
      <Link href="https://communityadvocate.com" target="_blank">
        Community Advocate Newspaper
      </Link>
      . I conduct research projects independently and have presented a full
      paper and a poster at the{' '}
      <Link href="https://ewh.ieee.org/conf/stem/" target="_blank">
        IEEE Integrated STEM Education Education Conference{' '}
      </Link>
      . I am truly fortunate to have won regional, state, and national awards at
      multiple science fairs. I am grateful that this year, I presented my work
      at at both the{' '}
      <Link
        target="_blank"
        href="https://student.societyforscience.org/intel-isef"
      >
        Intel International Science and Engineering Fair
      </Link>
      , and the{' '}
      <Link target="_blank" href="https://www.jshs.org/national-symposium/">
        National Junior Science and Humanities Symposium
      </Link>
      . I will also present a fast abstract (2 page paper) at{' '}
      <Link target="_blank" href="https://ieeecompsac.computer.org/">
        IEEE COMPSAC
      </Link>
      .
    </P>
    <P>
      At school, I am a member of the Saint John's Mock Trial team. I am also a
      member of the French Club, and the Be Like Brit Club.
    </P>
  </Layout>
);
