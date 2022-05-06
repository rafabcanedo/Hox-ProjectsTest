import React,{ useState } from 'react';
import { useGetAllPostQuery } from '../../services/post';
import styled from 'styled-components';
import { Table, Button } from 'react-bootstrap';
import { render } from 'react-dom';

// Usei STYLED COMPONENTS. o scss estava dando interferencia
/*const DevTable = styled.div`
.TestTable {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 1rem;
  }
  
  table {
    border-collapse: collapse;
    display: flex;
    justify-content: center;
    //width: 90%;
    align-self: center;
  }
  
  th,
  td {
    border: 1px solid #ffffff;
    text-align: left;
    padding: 8px;
    font-size: 25px;
  }
  
  th {
    background-color: #6677D9;
  }
  
  td {
    background-color: #6677D9;
  }
  
  form {
    display: flex;
    gap: 5px;
  }
  
  form td:last-child {
    display: flex;
    justify-content: space-evenly;
  }
  
  form * {
    font-size: 28px;
  }
`; */

//import styled from './table.module.scss';

const DevTable = styled.div`
 margin-top: 6em;
 width: auto;
 position: relative;
 padding: 0 4rem;
`;

const Header = styled.div`
 display: flex;
 justify-content: center;
`;

const TableProduct = () => {

   // Uptade Profuto
   /*
   carregarDados = (id) => {
        fetch("http://localhost:3003/produtos" + id, { method: 'GET'})
        .then(resposta => resposta.json())
        .then(produto => {
          this.setState({ 
            id: produto.id,
            nome: produto.nome,
            dataFabricacao: produto.dataFabricacao,
            prodPerecivel: produto.prodPerecivel,
            dataValidade: produto.dataValidade,
            preco: produto.preco
          })
          this.abrirModal
        })
   */

   // Deletando Produto
  /*
    deletarProduto = (id) => {
        fetch("http://localhost:3003/produtos" + id, { method: 'DELETE'})
        .then(resposta => {
            if(resposta.ok){
                this.buscarProduto();
            }
        })
    } */
    
  const responseInfo = useGetAllPostQuery()

  //console.log("Response Information: ", responseInfo)
  console.log("Data: ", responseInfo.data)
  console.log("Sucess: ", responseInfo.isSuccess)

  if (responseInfo.isLoading) return <div>Loading...</div>
  if (responseInfo.isError) return <div>Ocorreu um erro {responseInfo.error.error}</div>

    return (
      <>
      <Header>
        <h5>Produtos</h5>
      </Header>
    <DevTable>
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Nome</th>
        <th>Data Fabricacao</th>
        <th>prod Perecivel</th>
        <th>Data Validade</th>
        <th>Preco</th>
        <th>Opçoes</th>
      </tr>
    </thead>
    <tbody>
    {
    responseInfo.data.map((produtos) =>
        <tr>
        <td>{produtos.id}</td>
        <td>{produtos.nome}</td>
        <td>{produtos.dataFabricacao}</td>
        <td>{produtos.prodPerecivel}</td>
        <td>{produtos.dataValidade}</td>
        <td>{produtos.preco}</td>
        <td>
          <Button variant="warning">Atualizar</Button>
          <Button variant="danger">Excluir</Button>
        </td>
        </tr>
        )
      }
    </tbody>
  </Table>
  </DevTable>
  </>
    );
  }

export default TableProduct;

/* 
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
*/


///////////////// BUTTON ACTIONS /////////////////

// <Button variant="warning"onClick={() => this.carregarDados(produto.id)}>Atualizar</Button>

//  <td>Atualizar <Button variant="danger" onClick={() => this.deletarProduto(produto.id)}>Excluir</Button></td>