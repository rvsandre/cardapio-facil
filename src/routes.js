import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Painel/Login/Login';
import Index from './components/Index';

const Rota = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      children={(props) => {
        return <Component {...props} />;
      }}
    />
  );
};

const DefaultRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
};

export default DefaultRoutes;
