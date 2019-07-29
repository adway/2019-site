import styled from 'styled-components';
import theme from '../theme/config';

export const Link = styled.a`
  color: ${props => props.color};
  text-decoration: none;
  font-weight: 700;
  margin-right: ${props => props.mr}em;
  font-size: ${props => props.fontSize}px;
`;

Link.defaultProps = {
  color: `${theme.colors.link}`
};
