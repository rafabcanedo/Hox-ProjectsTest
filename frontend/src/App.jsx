import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'

import MainRouter from './routes';

// Import Auth
import { AuthProvider } from './Context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
    <Router>
    <MainRouter />
    </Router>
    </AuthProvider>
  );
}

export default App;