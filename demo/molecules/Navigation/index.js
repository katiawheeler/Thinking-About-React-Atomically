import React from 'react';
import styled from 'styled-components';

const UL = styled('ul')`
  list-style-type: none;
  margin: 0;
  padding: 0;
  align-self: center;
  font-size: 20px;

  & li {
    display: inline;
    margin-right: 20px;

    &:first-child {
      margin-left: 20px;
    }
  }
`;

const Navigation = ({ links }) => (
  <UL>
    {links.map((link, i) => (
      <li key={i}>{link}</li>
    ))}
  </UL>
);

export default Navigation;
