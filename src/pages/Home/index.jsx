import React from 'react';
import logo from '../../assets/logo.svg';
import './styles.css';


export default () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta"/>
        </header>
        <main>
          <h1>Seu gerenciador financeiro.</h1>
          <p>Ajudamos universitários desocupados a terem mais tempo disponível.</p>
          <a href="#">
            <span></span>
            <strong>Acessar</strong>
          </a>
        </main>
      </div>
    </div>
  );
}