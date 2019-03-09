import React from 'react';
import styled from 'styled-components';
import { demo } from '../../../config';

const Container = styled('div')`
    height: 213px;
    width: 1200px;
    background: ${props => props.background};
    color: ${props => props.color};
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

export const Quotation = styled('div')`
    font-size: 26px;
    font-style: italic;
`

const Author = styled('div')`
    font-size: 20px;
    margin-top: 5px;
`

const Quote = ({quote, author, background = demo.secondary, color = demo.white}) => <Container background={background} color={color}><Quotation>"{quote}"</Quotation><Author>{author}</Author></Container>

export default Quote;