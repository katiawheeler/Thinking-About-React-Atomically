import React from 'react';
import styled from 'styled-components';
import placeholder from '../../../assets/images/placeholder_background.png';


const BannerWrapper = styled('div')`
    background: url('${props => props.background ? props.background : placeholder}');
    background-size: cover;
    height: ${props => props.height}px;
    width: 1200px;
    overflow: hidden;
`;

const Banner = ({image, height = '300', className}) => <BannerWrapper background={image} height={height} className={className}/>

export default Banner;