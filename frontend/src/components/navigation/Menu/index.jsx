import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo/Logo';
import Avatar from '../Avatar'; 

const Section = styled.section`
  width: 100vw;
  background-color: #292f40;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: '5em';
  margin: 0 auto;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  cursor: pointer;

  a{
    color: #03A688;
    text-decoration: none;
  }
  
  &::after {
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: #03A688;
    transition: width 0.3s ease;
  }
  &:hover::after{
    width: 100%;
  }
`;

export default function Nav() {
    return (
    <Section>
     <Navbar>
       <Logo />
      <Menu>
        <MenuItem>
        <a href='/dashboard'>Dashboard</a>
        </MenuItem>
        <MenuItem>
        <a href='/produtos'>Produtos</a>
        </MenuItem>  
        <MenuItem>
        <a href='/usuarios'>Usuários</a>
        </MenuItem>   
      </Menu>
      <Avatar />   
     </Navbar>
    </Section>
  );
}


// item margin-right: 1em;
// item a color white textdecoration none 