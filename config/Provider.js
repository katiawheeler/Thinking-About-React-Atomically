import React from 'react';
import styled from 'styled-components';

const Wrapper = styled('div')`
    & .eCoqJu {
        display: none;
    }
`

export const Provider = ({children, ...rest}) => <Wrapper {...rest}>{children}</Wrapper>