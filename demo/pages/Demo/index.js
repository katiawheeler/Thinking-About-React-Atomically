import React from 'react';
import { Header, Hero, Blog, Footer } from '../../organisms';
import { Button, Quote, Banner } from '../../atoms';
import styled from 'styled-components';
import { demo } from '../../../config';
import background from '../../../assets/images/background.jpg';
import books from '../../../assets/images/books.jpg';

const barrierReefContent =
  "You can do your part in helping to save the Great Barrier Reef. Donate today to contribute to conservation and clean up efforts of one of the world's most important natural sites.";

const DemoWrapper = styled('div')`
  zoom: 70%;
  max-width: 1200px;

  & .logo {
    background: ${demo.secondary};
  }

  & button {
    color: ${demo.grey[600]};
  }

  & .search {
    background: ${demo.primary};
  }
`;

const Demo = () => (
  <DemoWrapper>
    <Header logo='Natural World' />
    <Hero
      background={background}
      title={'Save the Great Barrier Reef!'}
      content={barrierReefContent}
      button={
        <Button style={{ marginLeft: 0, background: demo.primary }}>
          Donate
        </Button>
      }
    />
    <Blog />
    <Quote quote={'Look deep into nature, and then you will understand everything better.'} author={'Albert Einstein'}/>
    <Banner image={books} height={'185'} />
    <Footer />
  </DemoWrapper>
);

export default Demo;
