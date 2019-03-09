import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../config';

const StyledLabel = styled('label')`
  text-transform: uppercase;
  font-size: 18px;
  color: ${props => props.color};
  line-height: 18px;

  &.front {
    padding: 9.25px;
    color: ${colors.black};
    background: ${colors.grey[400]};
  }

  &.top {
    display: block;
    float: left;
    font-size: 14px;
    margin-bottom: -5px;
    color: ${props => props.color};
  }
`;

const Label = ({ children, position }) => (
  <StyledLabel className={position ? position : ''}>{children}</StyledLabel>
);

export default Label;
