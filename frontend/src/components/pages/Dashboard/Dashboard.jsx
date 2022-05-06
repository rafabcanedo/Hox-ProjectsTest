import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import image from '../../../assets/iconButton.png';

import Navigation from '../../navigation/Menu/index';
import ContainerTitle from './ContainerTitle';
//import ButtonPage from './ButtonPage';
import Footer from '../../layout/footer/footer';

const Container = styled.div`
 width: auto;
 position: relative;
`;

// Segunda Parte Dashboard
const SegCont = styled.div`
 width: 100%;
 min-height: 80vh;
 margin: 0 auto;
 background-color: #333b52;

 display: flex;
 justify-content: center;
 align-items: center;
`;

const Box = styled.div`
 width: 50%;
 height: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`;

const Text = styled.h3`
 font-size: 25px;
 color: #03A688;
`;

const SubText = styled.h5`
 font-size: 20px;
 color: #F7D23E;
`;

const Button = styled.button`
 font-size: 15px;
 border: none;
 border-radius: 40px;
 text-transform: uppercase;

 display: flex;
 justify-content: center;
 align-items: center;

 width: 50%;
 height: 50px;
    
 background-color: #03A688;

 
 a{
    color: white;
    text-decoration: none;
  }
`;

const ButtonContainer = styled.div`
 width: 80%;
 display: flex;
 justify-content: center;
 align-self: center;
`;

const Dashboard = () => {
 return(
    <>
    <Container>
    <Navigation />
    <ContainerTitle />
    </Container>
    <SegCont>
    <Box><img src={image} alt="Button" width="400" height="400"/></Box>
    <Box>
    <Text>
       Clique no botão abaixo<br />
       E veja a lista de Proutos
    </Text>
    <SubText>Aqui controlamos os detalhes da empresa</SubText>
    <br />
    <ButtonContainer>
       <Button><a href='/produtos'>Produtos</a></Button>
    </ButtonContainer>
    </Box>
    </SegCont>
    <Footer />
    </>
 );
}

export default Dashboard;

/*
<Link to='/produtos'>
    <Button>Produtos</Button>
    </Link>
*/