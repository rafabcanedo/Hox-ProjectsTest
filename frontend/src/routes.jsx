import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Pages
import { Login } from './components/pages/Login/Login';
import { Register } from './components/pages/Register/Register';
import Dashboard from './components/pages/Dashboard/Dashboard';
import ProductCRUD from './components/CRUD/ProductCRUD';
import Usuarios from './components/pages/Usuários/Usuarios';

function MainRouter() {
    return (
      <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/register" element={<Register />} />
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/produtos" element={<ProductCRUD />} />
       <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
  );
}

export default MainRouter;