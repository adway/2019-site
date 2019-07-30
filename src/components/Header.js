import React from 'react';
import styled from 'styled-components';
import { capitalize } from 'lodash';

import { Flex, Box, Image, Text, Heading } from 'rebass';
import { socials } from '../data.json';
import Icon from '@hackclub/icons';
import theme from '../theme/config';

import { Link } from './Link';
import Emoji from './Emoji';

const Avatar = props => (
  <Image width={125} height={125} borderRadius={9999} {...props} />
);

const Name = styled(Heading)`
  color: ${theme.colors.uchicago};
  font-family: 'KoHo';
  font-size: ${theme.fontSizes[5]}px;
`;

const Location = styled(Text)`
  color: ${theme.colors.silver};
  font-weight: 500;
  font-size: ${theme.fontSizes[2]}px;
`;

const pages = {
  about: '',
  projects: 'projects'
};

const Social = ({ href, service, ...props }) => (
  <Box
    as="a"
    target="_blank"
    rel="noopener"
    href={href}
    mr={3}
    color={theme.colors.uchicago}
    aria-label={service}
    children={<Icon glyph={service} size={32} />}
    {...props}
  />
);

export default () => (
  <div>
    <Avatar src="https://pbs.twimg.com/profile_images/1134608799375994880/0IByf_yv_400x400.jpg" />
    <Name mt={3}>Adway Wadekar</Name>
    <Location>
      <Emoji label="Location Emoji" emoji="📍" />
      Boston, MA
    </Location>
    <Flex flexWrap="wrap" justifyContent={['flex-start']} mt={[3]}>
      {Object.entries(socials).map(([social, link]) => (
        <Social key={social} service={social} href={`https://${link}`} />
      ))}
      <Social key="Email" service="email" href="mailto:adway@adway.io" />
      <Social key="Resume" service="attachment" href="/resume.pdf" />
    </Flex>
    <Flex flexWrap="wrap" justifyContent={['flex-start']} mt={3} mb={3}>
      {Object.entries(pages).map(([page, url]) => (
        <Link key={page} mr="1" fontSize={theme.fontSizes[3]} href={`/${url}`}>
          {capitalize(page)}
        </Link>
      ))}
    </Flex>
    <hr></hr>
  </div>
);
