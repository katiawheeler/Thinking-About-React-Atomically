import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${props => props.color};
  align-self: flex-end;
`;

const Link = styled('span')`
  font-size: 1em;
  color: #81c784;
  margin-left: 20px;
`;

const Container = styled('div')`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SocialIcon = ({ link, icon, color }) => (
  <Container>
    <StyledIcon icon={icon} color={color} />
    <Link>{link}</Link>
  </Container>
);

export default SocialIcon;
