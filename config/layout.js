import React from 'react';
import styled from 'styled-components';

import { Split } from 'mdx-deck/layouts';

const FlexContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 0 100px;
`

const Flex = styled('div')`
  flex: 1;
`

export const Padded = ({ children }) => (
  <FlexContainer>
    {children}
  </FlexContainer>
);

export const PaddedSplit = ({ children }) => {
  const [left, ...right] = React.Children.toArray(
    children.props.children
  );

  return (
    <FlexContainer>
      <Flex>{left}</Flex>
      <Flex>{right}</Flex>
    </FlexContainer>
  );
};

export default {
  Padded,
  Split,
  PaddedSplit
};
