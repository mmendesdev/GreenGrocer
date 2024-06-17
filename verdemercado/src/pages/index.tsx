import React from "react";
import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";

import "../assets/css/index.css"


export default function Index() {
  return (
    <>
      <header className="header-bg">
        <div className="header">
          <Link to='/'><img src="assets/img/Group 1.png" alt="Mercado Verde" /></Link>
          <nav aria-label="primaria">
            <ul className="header-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/mercado">Mercado</Link></li>
              <li><Link to="/conta">Minha conta</Link></li>
              <li><Link to="/login"><img src="assets/img/Vector.svg" alt="Entrar" /></Link></li>
              <li><Link to="/pagamento"><img src="assets/img/Group 2.png" alt="Carrinho de Compra" /></Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="carrossel">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="assets/img/Igor carrossel_1.png" alt="Primeiro Slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="assets/img/Igor carrossel_2.png" alt="Segundo Slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="assets/img/Igor carrossel_3.png" alt="Terceiro Slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Anterior</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Próximo</span>
          </a>
        </div>
      </div>

      <h1><span>vamos</span> começar ;</h1>
      <p className="texto1">Publique seu lance como um comprador registrado ou crie sua oferta de safra como um vendedor verificado pela plataforma.</p>

      <div className="venda-geral">
        <div className="vendas">
          <img src="assets/img/Group 7.png" alt="inciar compra" />
          <p className="linha1">Comunique ao mercado o que você está procurando e obtenha reações rápidas de agricultores interessados.</p>
          <br />
          <a className="compras" href="./mercado.html"><button type="submit">QUERO COMPRAR</button></a>
        </div>
        <div className="vendas">
          <img src="assets/img/Group 8.png" alt="inciar venda" />
          <p className="linha1">Publique ofertas para a safra que deseja vender e obtenha acesso imediato a compradores com crédito verificado.</p>
          <br />
          <a className="compras" href="./mercado.html"><button type="submit">QUERO VENDER</button></a>
        </div>
      </div>

      <div className="banner2">
        <img src="assets/img/Group 6.png" alt="Preços e Valores" />
      </div>
      <div className="tutorial-titulo">
        <h2>Como funciona?</h2>
        <h3>Acompanhe nosso passo-a-passo e assista ao nosso vídeo demonstrativo:</h3>
      </div>
      <br />
      <br />
      <div className="tutorial">
        <div className="tutorial-lista">
          <ol>
            <li>Inscreva-se na plataforma</li>
            <li>Crie sua oferta ou lance</li>
            <li>Defina uma quantidade e preço</li>
            <li>Forneça-nos características e detalhes da cultura</li>
            <li>Publique sua oferta de vendedor ou lance de comprador</li>
            <li>Mantenha-se atualizado por e-mail ou central de notificações</li>
          </ol>
        </div>
        <div className="tutorial-img">
          <iframe width="500" height="290" src="https://www.youtube.com/embed/q8desBqlXcA?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
      <div className="suporte">
        <a href="mailto:mercado_verde@mercadoverde.com"><button className="suporte1" type="submit"><img src="assets/img/Group 20.png" alt="SUPORTE" /></button></a>
      </div>
      <br />
      <br />
      <br />
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
    </>
  );
}

