import React from 'react';
import './App.css'; // Assuming you have combined all CSS into App.css or imported them properly
import '../assets/css/login.css'

const App = () => {
  return (
    <div>
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

      {/* Inicio do forms */}
      <div className="cadastro">
        <div className="cadastro1">
          <h1>JÁ TENHO CADASTRO!</h1>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Endereço de email</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email" />
              <small id="emailHelp" className="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Senha</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Senha" />
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Me mantenha conectado</label>
            </div>
            <button type="submit">Entrar</button>
          </form>
        </div>
        <img src="assets/img/Line 2.png" alt="" />
        <div className="cadastro2">
          <h1>QUERO ME CADASTRAR!</h1>
          <form className="cadastro2">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Email</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Senha</label>
                <input type="password" className="form-control" id="inputPassword4" placeholder="Senha" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Endereço</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="Rua dos Bobos, nº 0" />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2">Complemento</label>
              <input type="text" className="form-control" id="inputAddress2" placeholder="Apartamento, hotel, casa, etc." />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">Cidade</label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputEstado">Estado</label>
                <select id="inputEstado" className="form-control">
                  <option selected>Escolher...</option>
                  <option>PE</option>
                  <option>RN</option>
                  <option>PB</option>
                  <option>RJ</option>
                  <option>SP</option>
                  <option>CE</option>
                  <option>BA</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="inputCEP">CEP</label>
                <input type="text" className="form-control" id="inputCEP" />
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck1" />
                <label className="form-check-label" htmlFor="gridCheck1">
                  Eu quero vender
                </label>
                <br />
                <input className="form-check-input" type="checkbox" id="gridCheck2" />
                <label className="form-check-label" htmlFor="gridCheck2">
                  Eu quero comprar
                </label>
                <br />
              </div>
            </div>
            <button className="botao1" type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
      {/* Fim do forms */}
      <div className="suporte">
        <a href="mailto:mercado_verde@mercadoverde.com">
          <button className="suporte1" type="submit">
            <img src="assets/img/Group 20.png" alt="SUPORTE" />
          </button>
        </a>
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
    </div>
  );
}

export default App;
