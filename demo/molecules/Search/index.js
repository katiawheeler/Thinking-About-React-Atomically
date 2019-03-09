import React from 'react';
import styled from 'styled-components';

import { Button, Label, Input } from '../../atoms';

const InputWrapper = styled('div')`
    max-width: 200px;
`;

const FlexDiv = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & button {
        align-self: flex-end;
        font-size: 14px;
    }

    & input {
      font-size: 14px;
      height: 35px;
    }
`

const Search = ({label, labelPosition, labelColor, style}) => (
  <FlexDiv style={style}>
    <InputWrapper>
      {label && <Label position={labelPosition} color={labelColor}>Search the site</Label> }
      <Input placeholder={'Enter keywords...'} />
    </InputWrapper>
    <Button primary className="search">Search</Button>
  </FlexDiv>
);

export default Search;
