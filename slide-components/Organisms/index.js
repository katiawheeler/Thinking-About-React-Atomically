import React from 'react';
import styled from 'styled-components';
import { Header, Blog, Hero } from '../../demo/organisms';
import { Button } from '../../demo/atoms';
import { colors } from '../../config';

const heroContent =
  "Integer nec varius ex, a ultricies lorem. Vivamus sed mi feugiat, dapibus purus sit amet, laoreet massa. Duis eu libero dolor.";

const Container = styled('div')`
    zoom: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & .logo {
    background: ${colors.grey[400]};
}

& button {
    background: ${colors.grey[400]};
    color: ${colors.black};
}
`

const Organism = styled('div')`
    margin-bottom: 40px;
`

const Info = styled('div')`
  text-transform: uppercase;
  color: ${colors.grey[200]};
`;

const Organisms = () => <Container>
  <Organism>
    <Info>Header</Info>
    <Header />
  </Organism>

  <Organism>
    <Info>Hero</Info>
    <Hero title={'Lorem Ipsum!'}
      content={heroContent}
      button={
        <Button style={{ marginLeft: 0 }}>
          Lorem ipsum
        </Button>
      } />
  </Organism>
  <Organism>
    <Info>Blog</Info>
    <Blog blogs={[
      { title: 'Lorem ipsum' },
      { title: 'Dolor sit amet' },
      { title: 'Lorem ipsum valor' },
    ]} />
  </Organism>
</Container>

export default Organisms;