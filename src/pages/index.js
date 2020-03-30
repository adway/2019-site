import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { Link } from '../components/Link';
import P from '../components/P';
import SectionTitle from '../components/SectionTitle';

const IndexPage = () => (
  <Layout>
    <SectionTitle>About Me</SectionTitle>
    <P mt={3}>
      Hi, I’m Adway! I’m a junior at{' '}
      <Link href='http://www.stjohnshigh.org' target='_blank'>
        Saint John’s High School
      </Link>{' '}
      in Shrewsbury, Massachusetts. I am interested in studying the human
      condition using a quantitative approach. Right now, my interests lie in
      using public domain data to understand mental illnesses and substance
      abuse disorders. I am also interested in understanding historical texts
      using a computational approach (a new field!). I conduct self-directed
      research projects and my work has been published in various IEEE
      Conferences and in Drug and Alcohol Dependence. I've also presented my
      work at Intel ISEF and the national JSHS.
    </P>
    <P>
      I am the 2019-2020 Photographer in Residence for the Town of Westborough.
      I document Westborough's history as it happens through photography.
      Specifically, I try to portray daily life through the eyes of young
      children. You can read my vision statement for this project{' '}
      <Link target='_blank' href={require('../assets/Vision.pdf')}>
        here
      </Link>
      . The photos that I take for this project will be posted{' '}
      <Link
        target='_blank'
        href='https://www.instagram.com/thewestborougharchive/'
      >
        here
      </Link>
      , although the account is not nearly as updated as it should be. At the
      end of my term, I will compile all of my photographs from the past year
      into a book, so that future citizens of Westborough and historians alike
      can take a look at what Westborough was like in the interesting time in
      which we live.
    </P>
    <P>
      Apart from my scientific research and my photography, I am a writer for
      the Community Advocate and the president of my school's mock trial team.
    </P>
  </Layout>
);

export default IndexPage;
