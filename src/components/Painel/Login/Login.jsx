import React from 'react';
import './style.css';

const Login = () => {
  return (
    <div className="loginContent">
      <div className="boxLogin">
        <section className="header">
          Login
          <hr />
        </section>
        <input
          type="text"
          placeholder="Usuario"
          name="usuario"
          id="usuario"
          className="loginFields"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
          className="loginFields"
        />
        <input type="button" className="btLogin" value="Entrar" />
      </div>
    </div>
  );
};

export default Login;
