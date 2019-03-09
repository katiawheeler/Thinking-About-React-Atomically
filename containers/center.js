import React from 'react';
import styled from 'styled-components';

const Centered = styled('div')`
  max-width: ${props => props.size || '500px'};
  width: 100%;
  margin: 0 auto;
`;

const Center = ({ children, size }) => (
  <Centered size={size}>{children}</Centered>
);

export default Center;