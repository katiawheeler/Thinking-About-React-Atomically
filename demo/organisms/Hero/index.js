import React from 'react';
import styled from 'styled-components';
import { Button } from '../../atoms';
import { HeroBox } from '../../molecules';
import placeholder from '../../../assets/images/placeholder_background.png';
import { colors } from '../../../config';

const Container = styled('div')`
    background: url('${props =>
      props.background ? props.background : placeholder}');
    height: 300px;
    position: relative;
    background-size: cover;
    background-position-y: -200px;

  & h4 {
      font-size: 18px;
  }

  & button {
      font-size: 14px;
      color: ${colors.grey[600]};
  }
`;

const Hero = ({
  background,
  align = 'right',
  title,
  content,
  button = null
}) => (
  <Container background={background}>
    <HeroBox align={align}>
      <h4>{title}</h4>
      <p>{content}</p>
      {button}
    </HeroBox>
  </Container>
);

export default Hero;
