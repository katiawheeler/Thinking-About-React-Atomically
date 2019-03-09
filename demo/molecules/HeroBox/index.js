import React from 'react';
import styled from 'styled-components';

const Box = styled('div')`
  font-size: 14px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 20px 40px;
  position: absolute;
  bottom: 25px;
  ${props => props.align}: 80px;
  max-width: 400px;
  text-align: left;
`;

const HeroBox = ({ children, align }) => <Box align={align}>{children}</Box>;

export default HeroBox;
