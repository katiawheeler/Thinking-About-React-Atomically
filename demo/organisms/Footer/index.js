import React from 'react';
import styled from 'styled-components';
import { FooterNav } from '../../molecules';
import { demo } from '../../../config';

const Container = styled('div')`
  background: ${demo.offWhite};
  padding: 40px 80px 20px 80px;
`;

const InnerContainer = styled('div')`
  display: flex;
  justify-content: flex-start;
  max-width: 600px;
`;

const Footer = () => (
  <Container>
    <InnerContainer>
      <FooterNav header={'Destinations'} links={['Africa', 'Antarctica', 'Asia', 'Central America', 'Europe', 'North America', 'Pacific', 'South America']} />
      <FooterNav header={'Interests'} links={['Adventure Travel', 'Art and Culture', 'Backpacking', 'Family Holidays', 'Festivals', 'Food and Drink', 'Road Trips', 'Wildlife and Nature']} />
      <FooterNav header={'About Us'} links={['Who we are', 'What we do', 'Get involved', 'Donate']} />
      <FooterNav header={'Join Us'} links={['Careers', 'Volunteer', 'Subscribe']} />
    </InnerContainer>
  </Container>
);

export default Footer;
