import React from 'react';
import styled from 'styled-components';
import Image from '../../assets/AvatarLogo.png';

const Container = styled.div`
 display: flex;
 padding: 1rem;
 justify-content: flex-end;
 align-items: center;
 margin-bottom: 0.5rem; // Testando aqui ficou perfeito
`;

const ProfileImg = styled.img`
 height: 3rem;
 margin: 0 2rem;
 cursor: pointer;
`;

const Avatar = () => {
    return(
     <Container>
      <ProfileImg src={Image} />
     </Container>
    );

};

export default Avatar;