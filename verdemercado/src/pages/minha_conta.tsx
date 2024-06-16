import React from 'react';
import './App.css'; // Ensure you have this CSS file and all styles imported here
import '../assets/css/minha_conta.css'

const Header = () => {
  return (
    <header className="header-bg">
      <div className="header">
        <a href="./index.html">
          <img src="assets/img/Group 1.png" alt="Mercado Verde" />
        </a>
        <nav aria-label="primaria">
          <ul className="header-menu">
            <li><a href="./index.html">HOME</a></li>
            <li><a href="./mercado.html">MERCADO</a></li>
            <li><a href="./minha_conta.html">MINHA CONTA</a></li>
            <li><a href="./login.html"><img src="assets/img/Vector.svg" alt="Entrar" /></a></li>
            <li><a href="./pagamento.html"><img src="assets/img/Group 2.png" alt="Carrinho de Compra" /></a></li>
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
        <img src="assets/img/Line 2.png" alt="" />
        <div>
          <ul className="lista-footer">
            <li><b>CONTATO</b></li>
            <br />
            <li><img src="assets/img/Vector1.png" alt="" /> (81) 99999-9999</li>
            <li><img src="assets/img/Vector2.png" alt="" /> mercado_verde@mercadoverde.com</li>
          </ul>
        </div>
        <div>
          <img className="lista-footer" src="assets/img/Group 19.png" alt="" />
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
        <img className="img1" src="assets/img/Group 27.png" alt="" />
        <div className="texto-ofertas">
          <h2>Meu Cadastro</h2>
          <h3>Nome: Igor Cavalcanti Moura</h3>
          <h4>E-mail: icavalcantimoura@gmail.com </h4>
        </div>
      </div>
      <div className="ofertas">
        <img className="img1" src="assets/img/Group 24.png" alt="" />
        <div className="texto-ofertas">
          <h2>Meus Endereços</h2>
          <h3>Cidade: Recife</h3>
          <h4>Rua: Isaac Buril, 900 </h4>
        </div>
      </div>
      <div className="ofertas">
        <img className="img1" src="assets/img/Group 25.png" alt="" />
        <div className="texto-ofertas">
          <h2>Minhas Vendas</h2>
          <h3>Nenhuma Venda Realizada</h3>
        </div>
      </div>
      <div className="ofertas">
        <img className="img1" src="assets/img/Group 26.png" alt="" />
        <div className="texto-ofertas">
          <h2>Meus Pedidos</h2>
          <h3>Pedido: Nº 090909</h3>
          <h4>Status: Em separação</h4>
        </div>
      </div>
      <div className="ofertas">
        <img className="img1" src="assets/img/Group 28.png" alt="" />
        <div className="texto-ofertas">
          <h2>Alterar Senha</h2>
          <h3>*************</h3>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <AccountDetails />
      <div className="suporte">
        <a href="mailto:mercado_verde@mercadoverde.com">
          <button className="suporte1" type="submit">
            <img src="assets/img/Group 20.png" alt="SUPORTE" />
          </button>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default App;
