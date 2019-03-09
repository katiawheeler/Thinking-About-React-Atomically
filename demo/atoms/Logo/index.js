import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../config';

const LogoContainer = styled('div')`
  text-transform: uppercase;
  background: ${props =>
    props.image ? `url(${props.image})` : colors.secondary};
  color: ${colors.white};
  padding: 10px 20px;
`;

const Logo = ({ image, text }) => (
  <LogoContainer className="logo" image={image}>{text}</LogoContainer>
);

export default Logo;
