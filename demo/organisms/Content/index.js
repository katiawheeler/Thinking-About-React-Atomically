import React from 'react';
import styled from 'styled-components';
import { demo } from '../../../config';


const Container = styled('div')`
    padding: 50px 80px;
    background: ${demo.white};
    color: ${demo.black};
    text-align: left;
    
    & p {
        font-size: .5em;
        color: ${demo.black};
        margin: 20px 0;
    }
`;

const TopContainer = styled('div')`
    margin-bottom: 50px;

    & h1 {
        margin: 0;
        font-size: 1em;
    }   

    & h4 {
        margin: 5px 0;
        font-size: 0.70em;
        color: ${demo.grey[500]};
    }

    & p {
        margin: 5px 0;
    }
`

const Content = ({title, subtitle, author, content}) => <Container>
<TopContainer>
    <h1>{title}</h1>
    <h4>{subtitle}</h4>
    <p>Written by {author}</p>
    </TopContainer>
    {content.map((p, i) => <p key={i}>{p}</p>)}
</Container>

export default Content;