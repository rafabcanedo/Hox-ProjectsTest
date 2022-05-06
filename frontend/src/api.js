// Puxando a api para fazer a Auth do Login
import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3003/usuarios', // ou http://localhost:3003 ?
});