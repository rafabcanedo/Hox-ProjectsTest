import React from 'react';
import styled from 'styled-components';

import {FaInstagram, FaLinkedin, FaTwitch} from 'react-icons/fa';

const Container = styled.div`
 background-color: #292f40;
 color: #03A688;
 padding: 3em;
 text-align: center;
`;
const Ul = styled.ul`
 display: flex;
 justify-content: center;
 list-style-type: none;
`;
const Li = styled.li`
 list-style: none;
 margin: 0 1em;

 &:hover{
     color: white;
 }

 svg{
     font-size: 1.5em;
     cursor: pointer;
 }

 a{
    color:#03A688;
    text-decoration: none;
  }
`;

const PCopy = styled.p`
 margin-top: 2em;

 span{
     font-weight: bold;
     color: #03A688;
 }
`;

const Footer = () => {
 return(
     <Container>
        <Ul>
        <Li>
         <a href='https://www.instagram.com/canedodev/' target='_blank'
        rel='nooperner'
        >
         <FaInstagram />
         </a>
        </Li>
        <Li>
        <a href='https://www.linkedin.com/in/rafael-canedo-4abaa8197/' target='_blank'
        rel='nooperner'
        >
         <FaLinkedin />
         </a>
        </Li>
        <Li>
        <a href='https://www.twitch.tv/canedopriv' target='_blank'
        rel='nooperner'
        >
        <FaTwitch />
        </a>
        </Li>
        </Ul>
        <PCopy>
         <span>Empresa</span> &copy; 2022
        </PCopy>
     </Container>
 );
}

export default Footer;
