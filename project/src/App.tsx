import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Conteudo from './pages/Conteudo';
import MetasFinanceiras from './pages/MetasFinanceiras';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/conteudo" element={<Conteudo />} />
          <Route path="/metas" element={<MetasFinanceiras />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;