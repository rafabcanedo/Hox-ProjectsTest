import React from 'react';
import styled from 'styled-components';
import image from '../../../assets/HoxNav.png';

const LogoText = styled.h1`
 font-size: '3em';
 transition: all 0.2s ease;
 cursor: pointer;
 &:hover {
     transform: scale(1.1);
 }
`;

const Logo = () => {
    return(
    <LogoText>
     <img src={image} alt="" />  
    </LogoText>
    );
};

export default Logo;