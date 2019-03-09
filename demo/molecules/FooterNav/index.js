import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../config';

const NavContainer = styled('div')`
  margin: 0 80px 0 0;
`;

const NavHeader = styled('h5')`
  margin: 2px 0px;
  color: ${colors.black};
  font-size: 16px;
  text-transform: uppercase;
  padding: 0;
  text-align: left;
`;

const StyledUl = styled('ul')`
  list-style: none;
  color: ${colors.grey[600]};
  margin: 5px 20px 5px 0;
  padding: 0;
  text-transform: uppercase;
  width: 125px;

  & li {
    font-size: 14px;
    text-align: left;
    margin: 5px 0;
  }
`;

const FooterNav = ({ header, links }) => (
  <NavContainer>
    <NavHeader>{header}</NavHeader>
    <StyledUl>
      {links.map((link, i) => (
        <li key={i}>{link}</li>
      ))}
    </StyledUl>
  </NavContainer>
);

export default FooterNav;
