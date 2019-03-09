import React from 'react';
import styled from 'styled-components';
import { demo } from '../config';

import { Button, Input, Label, Logo, Banner } from '../demo/atoms';
import { Quotation } from '../demo/atoms/Quote';
import { BlogPost, FooterNav, HeroBox, Search } from '../demo/molecules';

import placeholder from '../assets/images/blog_placeholder.png';

const Strip = styled('div')`
display: flex;
flex-direction: column;
justify-content: space-between;

    & button {
        background: ${demo.grey[400]};
        margin: 0 0 10px 0; 
    }

    & .logo {
        background: ${demo.grey[400]};
    }

    & h5 {
        color: ${demo.white};
    }

    & h4 {
        margin: 0;
    }

    & ul {
        color: ${demo.white};
    }

    & .banner {
        max-width: 400px;
    }

`

const Molecule = styled('div')`
    & button {
        background: ${demo.grey[400]};
    }
`

export const demoAtomsFirst = [
    {
        component: <Strip><Logo text="Logo" /></Strip>,
        name: "Logo",
    },
    {
        component: <Strip>
                <Button>Lorem ipsum</Button>
            </Strip>,
        name: "Button",
    },
    {
        component: <Strip>
        <img src={placeholder} />
            </Strip>,
        name: "Image",
    },
    {
        component: <Strip>
        <Quotation>"Lorem ipsum dolor sit amet, consectetur..."</Quotation>
            </Strip>,
        name: "Quote",
    },
    
];
export const demoAtomsSecond = [
    {
        component: <Strip><Input placeholder="Lorem ipsum..." /></Strip>,
        name: "Input",
    },
    {
        component: <Strip>
                <Label>Lorem ipsum</Label>
            </Strip>,
        name: "Label",
    },
    {
        component: <Strip>
                <Banner className="banner" height={'100'} />
            </Strip>,
        name: "Banner",
    }
];

export const demoMoleculesFirst = [
    {
        component: <Molecule><BlogPost title={'Lorem ipsum'} /></Molecule>,
        name: 'BlogPost'
    },
        {
        component: <Strip>
        <FooterNav header={'Interests'} links={['Adventure Travel', 'Art and Culture', 'Backpacking', 'Family Holidays', 'Festivals', 'Food and Drink', 'Road Trips', 'Wildlife and Nature']} />
            </Strip>,
        name: "FooterNav",
    },
]

const HeroBoxWrapper = styled('div')`
     & div:first-child {
         position: inherit;
     }

     & button {
         font-size: 14px;
     }
`
export const demoMoleculesSecond = [
    {
        component: <Molecule><HeroBoxWrapper><HeroBox><h4>Lorem Ipsum</h4><p>Integer nec varius ex, a ultricies lorem. Vivamus sed mi feugiat, dapibus purus sit amet, laoreet massa. Duis eu libero dolor.</p><Button
          style={{
            marginLeft: 0,
          }}
        >
          Lorem ipsum
        </Button></HeroBox></HeroBoxWrapper></Molecule>,
        name: 'HeroBox'
    },
        {
        component: <Molecule>
        <Search label={true} labelPosition={'top'} labelColor={demo.white} /></Molecule>,
        name: "Search",
    },
]