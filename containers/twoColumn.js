import React from 'react';
import styled from 'styled-components';

const FlexContainer = styled('div')`
  display: flex;
  align-items: ${props => props.alignment};
  justify-content: space-between;
`;

const FlexChild = styled('div')`
  flex: 1;
  padding: ${props => props.padding};
  border-right: ${props => props.border};
`;

const TwoColumn = ({ children, padding, alignment = "center", border = "none" }) => {
  const [firstChild, ...others] = children;

  return (
    <FlexContainer alignment={alignment}>
      <FlexChild padding={padding} border={border}>{firstChild}</FlexChild>
      <FlexChild padding={padding}>{others}</FlexChild>
    </FlexContainer>
  );
};

export default TwoColumn