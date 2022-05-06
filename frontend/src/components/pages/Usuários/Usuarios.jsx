import React, { useState, useEffect } from 'react';
import { useGetAllPostQuery } from '../../../services/postUsuarios';
import { Table, Button } from 'react-bootstrap';

import Menu from '../../navigation/Menu/index';
import Footer from '../../layout/footer/footer';

const Usuarios = () => {
    /*const [ usuarios, setUsuarios ] = useState([]);

    useEffect(async () => {
     (async () => {
         const { data } = await api.get('/usuarios');

         setUsuarios(data);
     })();
    }, []); */


    const responseInfo = useGetAllPostQuery()

    console.log("Data: ", responseInfo.data)
    console.log("Sucess: ", responseInfo.isSuccess)

    if (responseInfo.isLoading) return <div>Loading...</div>
    if (responseInfo.isError) return <div>Ocorreu um erro {responseInfo.error.error}</div>

    return(
    <>
    <Menu />
    <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {
        responseInfo.data.map((usuarios) =>
            <tr>
            <td>{usuarios.id}</td>
            <td>{usuarios.nome}</td>
            <td>{usuarios.email}</td>
            <td>
              <Button variant="warning">Atualizar</Button>
              <Button variant="danger">Excluir</Button>
            </td>
            </tr>
            )
          }
        </tbody>
    </Table>
    <div>
    <Footer />
    </div>
    </>
    );
}

export default Usuarios;