import React from 'react';
import styled from 'styled-components';


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
 border-radius: 10px;
 color: #fff;
 line-height: 1.2;
 text-transform: uppercase;

 display: flex;
 justify-content: center;
 align-items: center;

 width: 100%;
 height: 50px;
    
 background-color: #03A688;
`;

const ButtonPage = () => {
<SegCont>
    <Box><h1>Photo</h1></Box>
    <Box>
    <Text>
       Clique no botão abaixo<br />
       E veja a lista de Proutos
    </Text>
    <SubText>Aqui controlamos os detalhes da empresa</SubText>
    </Box>
</SegCont>
}

export default ButtonPage;