import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../config';
import { Header, Hero, Blog, Footer } from '../../organisms';
import { Button, Quote, Banner } from '../../atoms';

const StyleWrapper = styled('div')`
zoom: 70%;
  max-width: 1200px;

& .logo {
    background: ${colors.grey[400]};
}

& button {
    background: ${colors.grey[400]};
    color: ${colors.black};
}
`

const heroContent =
  "Integer nec varius ex, a ultricies lorem. Vivamus sed mi feugiat, dapibus purus sit amet, laoreet massa. Duis eu libero dolor.";

const blogs = [
    {title: 'Lorem ipsum'},
    {title: 'Dolor sit amet'},
    {title: 'Lorem ipsum valor'},
]

const Demo = () => (
  <StyleWrapper>
    <Header />
    <Hero
      title={'Lorem Ipsum!'}
      content={heroContent}
      button={
        <Button style={{ marginLeft: 0 }}>
          Lorem ipsum
        </Button>
      }
    />
    <Blog blogs={blogs}/>
    <Quote quote={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} author={'Lorem Ipsum'} background={colors.grey[500]} />
    <Banner height={'185'} />
    <Footer />
  </StyleWrapper>
);

export default Demo;
