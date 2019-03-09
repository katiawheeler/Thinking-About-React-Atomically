import React from 'react';
import styled from 'styled-components';
import { Search, Navigation } from '../../molecules';
import { Logo } from '../../atoms';
import { colors } from '../../../config';

const Container = styled('div')`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background: ${colors.white};
  color: ${colors.black};
  padding: 10px 30px;
  max-width: 1800px;
  min-width: 1000px;
  width: 100%;
`;

const FlexDiv = styled('div')`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const defaultLinks = ['About', 'Destinations', 'Get Involved', 'Donate'];

const Header = ({ logo = 'Logo', links = defaultLinks }) => (
  <Container>
    <FlexDiv>
      <Logo className='logo' text={logo}></Logo>
      <Navigation links={links} />
    </FlexDiv>
    <Search label={true} labelPosition={'top'} labelColor={colors.black} />
  </Container>
);

export default Header;
