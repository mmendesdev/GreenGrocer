import React from 'react';
import '../assets/css/minha_conta.css'
import { Link } from 'react-router-dom';
import  Group1 from "./img/Group 1.png";
import  Group2 from "./img/Group 2.png";
import  Vector from "./img/Vector.svg";
import  Group19 from "./img/Group 19.png";
import  Group20 from "./img/Group 20.png";
import  Group24 from "./img/Group 24.png";
import  Group25 from "./img/Group 25.png";
import  Group26 from "./img/Group 26.png";
import  Group27 from "./img/Group 27.png";
import  Group28 from "./img/Group 28.png";
import  Vector1 from "./img/Vector1.png";
import  Vector2 from "./img/Vector2.png";
import Line2 from "./img/Line 2.png";

const Header = () => {
  return (
    <header className="header-bg">
      <div className="header">
        <Link to='/'><img src={Group1} alt="Mercado Verde" /></Link>
        <nav aria-label="primaria">
          <ul className="header-menu">
          <li><Link to="/">Home</Link></li>
              <li><Link to="/mercado">Mercado</Link></li>
              <li><Link to="/conta">Minha conta</Link></li>
              <li><Link to="/login"><img src={Vector} alt="Entrar" /></Link></li>
              <li><Link to="/pagamento"><img src={Group2} alt="Carrinho de Compra" /></Link></li>
              <li><Link to="/suporte">Suporte</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="footer">
        <div>
          <ul className="lista-footer">
            <li><b>MENU</b></li>
            <br />
            <li><a className="menu" href="./index.html">Home</a></li>
            <li><a className="menu" href="./mercado.html">Mercado</a></li>
          </ul>
        </div>
        <div>
          <ul className="lista-footer">
            <li><b>SOBRE NÓS</b></li>
            <br />
            <li>Quem Somos?</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <ul className="lista-footer">
            <li><b>PRIVACIDADE</b></li>
            <br />
            <li>Política de Privacidade</li>
            <li>Termos & Condições</li>
          </ul>
        </div>
        <img src={Line2} alt="" />
        <div>
          <ul className="lista-footer">
            <li><b>CONTATO</b></li>
            <br />
            <li><img src={Vector1} alt="" /> (81) 99999-9999</li>
            <li><img src={Vector2} alt="" /> mercado_verde@mercadoverde.com</li>
          </ul>
        </div>
        <div>
          <img className="lista-footer" src={Group19} alt="" />
        </div>
      </div>
    </footer>
  );
};

const AccountDetails = () => {
  return (
    <div className="painel-ofertas">
      <div className="painel">
        <h1 className="painel-hover">Olá, <b>IGOR CAVALCANTI!</b></h1>
      </div>
      <div className="ofertas">
        <img className="img1" src={Group27} alt="" />
        <div className="texto-ofertas">
          <h2>Meu Cadastro</h2>
          <h3>Nome: Igor Cavalcanti Moura</h3>
          <h4>E-mail: icavalcantimoura@gmail.com </h4>
        </div>
      </div>
      <div className="ofertas">
        <img className="img1" src={Group24} alt="" />
        <div className="texto-ofertas">
          <h2>Meus Endereços</h2>
          <h3>Cidade: Recife</h3>
          <h4>Rua: Isaac Buril, 900 </h4>
        </div>
      </div>
      <div className="ofertas">
        <img className="img1" src={Group25} alt="" />
        <div className="texto-ofertas">
          <h2>Minhas Vendas</h2>
          <h3>Nenhuma Venda Realizada</h3>
        </div>
      </div>
      <div className="ofertas">
        <img className="img1" src={Group26} alt="" />
        <div className="texto-ofertas">
          <h2>Meus Pedidos</h2>
          <h3>Pedido: Nº 090909</h3>
          <h4>Status: Em separação</h4>
        </div>
      </div>
      <div className="ofertas">
        <img className="img1" src={Group28} alt="" />
        <div className="texto-ofertas">
          <h2>Alterar Senha</h2>
          <h3>*************</h3>
        </div>
      </div>
    </div>
  );
};

const Conta = () => {
  return (
    <div>
      <Header />
      <AccountDetails />
      <div className="suporte">
        <a href="mailto:mercado_verde@mercadoverde.com">
          <button className="suporte1" type="submit">
            <img src={Group20} alt="SUPORTE" />
          </button>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Conta;
