import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../config';
import { Label } from '../';

const StyledInput = styled('input')`
  width: 100%;
  height: 40px;
  border: 1px solid ${colors.grey[300]};
  outline: none;
  background: white;
  padding: 0 10px;
  font-size: 18px;
`;

const Input = ({ placeholder, label }) => (
  <React.Fragment>
    {label && <Label position='top'>{label}</Label>}
    <StyledInput type='text' placeholder={placeholder} />
  </React.Fragment>
);

export default Input;
