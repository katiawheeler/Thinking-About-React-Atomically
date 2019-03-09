import React from 'react';
import styled from 'styled-components';

import { Sponsors as SponsorImages } from '../../assets/images';

const Wrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 30px 0;
`;


const Sponsors = () => (
  <React.Fragment>
    <Wrapper>
      {SponsorImages.tierOne.map((image, i) => (
        <img src={image} key={i} style={{ width: '200px'}} />
      ))}
    </Wrapper>
        <Wrapper>
          {SponsorImages.tierTwo.slice(0, 6).map((image, i) => (
            <img src={image} key={i} style={{ width: '150px', margin: '0 5px' }} />
          ))}
        </Wrapper>
        <Wrapper>
          {SponsorImages.tierTwo.slice(6).map((image, i) => (
            <img src={image} key={i} style={{ width: '150px', margin: '0 5px' }} />
          ))}
        </Wrapper>
  </React.Fragment>
);

export default Sponsors;
