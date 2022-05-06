import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Import Icons
import { FaPlus } from "react-icons/fa";

const AddButton = styled.a`
 background-color: #633BBC; // Ficou essa cor,pois ao adicionar o Link o icon ficou roxo
 display: flex;
 justify-content: center;
 align-items: center;
 width: 50px;
 height: 50px;
 border-radius: 25px;
 position: absolute;
 top: 6rem;
 right: 7rem;
 cursor: pointer;
`;

const AddIcon = styled.span`
 color: #fff;
 font-size: 20px; // achei esse tamanho legal
`;

const NewProductBtn = () => {
    return(
     <AddButton>
      <AddIcon>
       <Link to='/crud'>
        <FaPlus />
       </Link>
      </AddIcon>
     </AddButton>
    );
}

export default NewProductBtn;