import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../config';

const Button = styled('button')`
  background: ${props => props.primary ? colors.primary : colors.grey[300]};
  color: ${props => props.primary ? colors.black : colors.grey[700]};
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  margin: 0px 10px;
`;

export default Button;
