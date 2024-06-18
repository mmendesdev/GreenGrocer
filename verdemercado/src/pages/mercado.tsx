import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/mercado.css';
import { Link } from 'react-router-dom';
import  Group1 from "./img/Group 1.png";
import  Group2 from "./img/Group 2.png";
import  Vector from "./img/Vector.svg";
import  Carrossel1 from "./img/Igor carrossel_1.png";
import  Carrossel2 from "./img/Igor carrossel_2.png";
import  Carrossel3 from "./img/Igor carrossel_3.png";
import  Group19 from "./img/Group 19.png";
import  Group20 from "./img/Group 20.png";
import  Group22 from "./img/Group 22.png";
import  Vector1 from "./img/Vector1.png";
import  Vector2 from "./img/Vector2.png";
import Line2 from "./img/Line 2.png";


function MercadoVerde() {
  return (
    <div>
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

      {/* Carousel */}
      <div className="carrossel">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={Carrossel1} alt="Primeiro Slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Carrossel2} alt="Segundo Slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Carrossel3} alt="Terceiro Slide" />
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

      {/* Painel de Ofertas */}
      <div className="painel">
        <h1 className="painel-hover">PAINEL DE OFERTAS</h1>
      </div>
      <div className="painel-ofertas">
        {/* Oferta 1 */}
        <div className="ofertas">
          <img className="img1" src={Group22} alt="" />
          <div className="texto-ofertas">
            <h2>Arroz</h2>
            <h3>Produção orgânica</h3>
            <h4>vendedor: ONG Dois Corações - Agricultura Familiar</h4>
          </div>
          <form>
            <div className="form-row align-items-center">
              <div className="col-auto my-1">
                <label className="mr-sm-2 sr-only" htmlFor="inlineFormCustomSelect">Preferência</label>
                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                  <option >Qtd...</option>
                  <option value="1">1kg</option>
                  <option value="2">2kg</option>
                  <option value="3">3kg</option>
                </select>
              </div>
              <div className="col-auto my-1">
                <button type="submit" className="botao-oferta">
                  <a className="aoferta" href="pagamento.html">Comprar</a>
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* Outras Ofertas (repita conforme necessário) */}
        {/* ... */}
      </div>

      {/* Paginação */}
      <nav aria-label="Navegação de página exemplo">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex={-1}>Anterior</a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Próximo</a>
          </li>
        </ul>
      </nav>

      {/* Suporte */}
      <div className="suporte">
        <a href="mailto:mercado_verde@mercadoverde.com">
          <button className="suporte1" type="submit">
            <img src={Group20} alt="SUPORTE" />
          </button>
        </a>
      </div>

      {/* Rodapé */}
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
    </div>
  );
}

export default MercadoVerde;
