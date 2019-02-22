import React from 'react';
import Layout from '../components/Layout';
import P from '../components/designSystem/P';
import Link from '../components/designSystem/Link';
import H1 from '../components/designSystem/H1';
import Tab from '../components/designSystem/Tab';

export default () => (
  <Layout>
    <Tab page="About" />
    <H1>About Me</H1>
    <P>
      Hi! I’m Adway. I’m currently a sophomore at{' '}
      <Link href="http://www.stjohnshigh.org/" target="_blank">
        Saint John’s High School
      </Link>{' '}
      in Shrewsbury, Massachusetts. I am interested in studying economics and
      would like to pursue an academic career in quantitative social policy.
      Feel free to view my résumé{' '}
      <Link href="/Resume.pdf" target="_blank">
        here
      </Link>
      .
    </P>
    <P>
      I enjoy learning, reading the news and taking pictures with my Canon Rebel
      T5. I'm working on{' '}
      <Link href="https://stopioid.org" target="_blank">
        Stopioid
      </Link>
      , which is an app that utilizes a decision tree alogrithm to predict and
      prevent opioid use disorder. I currently intern at the{' '}
      <Link href="http://edc.town.westborough.ma.us" target="_blank">
        Town of Westborough’s Economic Development Committee
      </Link>
      . Currently, I’m working on populating a database with all of the
      businesses in Westborough.
    </P>
    <P>
      I am also a contributing writer and photographer for the{' '}
      <Link href="https://communityadvocate.com" target="_blank">
        Community Advocate Newspaper
      </Link>
      . I also to conduct projects independently and have presented full papers
      at the{' '}
      <Link href="https://ewh.ieee.org/conf/stem/" target="_blank">
        Integrated STEM Education Education Conference{' '}
      </Link>
      . I have also won regional, state, and national awards at multiple science
      fairs. At school, I have helped lead the Saint John's Mock Trial team to a
      perfect preliminary tournament. I am also a member of the French Club, and
      the Be Like Brit Club.
    </P>
  </Layout>
);
