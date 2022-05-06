import React from 'react';
import styled from 'styled-components';

import image from '../../../assets/iconHome.png';

const HeroSection = styled.div`
 width: 100vw;
 height: 45vw;
 background-color: #333b52;
 
 display: flex;
 justify-content: center;
 position: relative;
`;

const Main = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 70vw;
`;

const Right = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 width: 50%;
 line-height: 1.5;
`;

const Topic = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 font-weight: 700;
 font-size: 50px;
 padding: 0.5rem 1rem;
 border-radius: 20px;
`;

const Title = styled.h1`
 font-size: 35px;
 line-height: 1.2;
 padding: 0.5rem 0;
`;

const SubText = styled.h5`
 font-size: 15px;
 color: #03A688;
`;

const Svg = styled.img`
 //max-width: 100%;
`;

const ContainerTitle = () => {
    return(
    <HeroSection>
      <Main>
       <Right>
        <Topic>
         <span>Bem Vindo Canedo</span>
        </Topic>
        <Title>Você está no Dashboard</Title>
        <SubText>
         Aqui há uma administração dos dados da empresa.
        </SubText>
       </Right>
       <Svg src={image} alt="Image" width="400" height="400" />    
      </Main>  
    </HeroSection>
    );
};

export default ContainerTitle;