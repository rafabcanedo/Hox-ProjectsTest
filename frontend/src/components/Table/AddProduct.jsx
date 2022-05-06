import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

class AddProduct extends React.Component {

    // HEADERS eu informo o tipo de aplicação que é: json
    cadastrarProduto = (produto) => {
        fetch("http://localhost:3003/produtos",{
         method: 'POST',
         headers: {'Content-Type':'application/json'},
         body: JSON.stringify(produto)
         })
        .then(resposta => {
            if (resposta.ok) {
                this.buscarProduto();
            }else{
                alert('Não foi possível adicionar o Produto!');
            }
        })
    }

    // Atualizar Produto
    atualizarProduto = (produto) => {
        fetch("http://localhost:3003/produtos", {
         method: 'PUT',
         headers: {'Content-Type':'application/json'},
         body: JSON.stringify(produto)
         })
        .then(resposta => {
            if (resposta.ok) {
                this.buscarProduto();
            }else{
                alert('Não foi possível atualizar os dados do Produto!');
            }
        })
    }

    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            nome: '',
            dataFabricacao: '',
            prodPerecivel: '',
            dataValidade: '',
            preco: '',
            produtos: [],
            modalAberta: false
        }
    }

    atualizaNome = (e) => {
        this.setState(
            {
                nome: e.target.value
            }
        )
    }

    
    atualizadataFabricacao = (e) => {
        this.setState(
            {
                nome: e.target.value
            }
        )
    }

    prodPerecivel = (e) => {
        this.setState(
            {
                nome: e.target.value
            }
        )
    }

    
    dataValidade = (e) => {
        this.setState(
            {
                nome: e.target.value
            }
        )
    }

    preco = (e) => {
        this.setState(
            {
                nome: e.target.value
            }
        )
    }

    submit = () => {
        if(this.state.id == 0) {
            const produto = {
                nome: this.state.nome,
                dataFabricacao: this.state.dataFabricacao,
                prodPerecivel: this.state.prodPerecivel,
                dataValidade: this.state.dataValidade,
                preco: this.state.preco
            }
    
            this.cadastrarProduto(produto);
        } else {
            const produto = {
                id: this.state.id,
                nome: this.state.nome,
                dataFabricacao: this.state.dataFabricacao,
                prodPerecivel: this.state.prodPerecivel,
                dataValidade: this.state.dataValidade,
                preco: this.state.preco
            }
    
            this.atualizarProduto(produto);
        }
        this.fecharModal();
    }

    reset = () => {
        this.setState(
            {
                nome: '',
                dataFabricacao: '',
                prodPerecivel: '',
                dataValidade: '',
                preco: '',
            }
        )
        this.abrirModal();
    }

    fecharModal = () => {
        this.setState(
        {
            modalAberta: false
        }
     )
    }

    abrirModal = () => {
        this.setState(
        {
            modalAberta: true
        }
     )
    }

    render() {
    return (
    <div>

    <Modal show={this.state.modalAberta} onHide={this.fecharModal}>
        <Modal.Header closeButton>
          <Modal.Title>Dados Do Produto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
    <Form.Group className="mb-3">
    <Form.Label>ID</Form.Label>
    <Form.Control type="text" value={this.state.id} readOnly={true} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicNome">
    <Form.Label>Nome</Form.Label>
    <Form.Control type="text" placeholder="Coloque o Nome" value={this.state.nome} onChange={this.atualizaNome} />
    <Form.Text className="text-muted">
      Aqui será o nome do Produto
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicFabricacao">
    <Form.Label>Data de Fabricação</Form.Label>
    <Form.Control type="text" placeholder="Coloque a data Fabricacao do produto" value={this.state.dataFabricacao} onChange={this.atualizadataFabricacao} />
    <Form.Text className="text-muted">
      Em que data o produto foi fabricado?
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPerecivel">
    <Form.Label>prod Perecivel</Form.Label>
    <Form.Control type="text" placeholder="O produto é Perecível?" value={this.state.prodPerecivel} onChange={this.prodPerecivel} />
    <Form.Text className="text-muted">
      O produto é Perecível ou não
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicValidade">
    <Form.Label>Data Validade</Form.Label>
    <Form.Control type="text" placeholder="Coloque a data de Validade do produto" value={this.state.dataValidade}  onChange={this.dataValidade} />
    <Form.Text className="text-muted">
      Em que data o produto vence?
    </Form.Text>
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPreco">
    <Form.Label>Preço</Form.Label>
    <Form.Control type="number" placeholder="Coloque o preço do produto" value={this.state.preco} onChange={this.preco} />
    <Form.Text className="text-muted">
      Qual o valor do produto?
    </Form.Text>
  </Form.Group>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.fecharModal}>
            Fechar
          </Button>
          <Button variant="primary" type="submit" onClick={this.submit} >
            Criar
          </Button>
        </Modal.Footer>
    </Modal>
    <Button variant="success" onClick={this.reset}>
       Novo
    </Button>
</div>
    );
 }
}

export default AddProduct;