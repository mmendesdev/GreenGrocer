import React, { useState } from 'react';
import '../assets/css/login.css';
import { Link } from 'react-router-dom';
import { database } from '../firebaseConfig'; // Importando a configuração do Firebase
import { ref, set } from "firebase/database";
import  Group1 from "./img/Group 1.png";
import  Group2 from "./img/Group 2.png";
import  Vector from "./img/Vector.svg";
import  Group19 from "./img/Group 19.png";
import  Group20 from "./img/Group 20.png";
import  Vector1 from "./img/Vector1.png";
import  Vector2 from "./img/Vector2.png";
import Line2 from "./img/Line 2.png";

const App = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    address: '',
    complement: '',
    city: '',
    state: '',
    cep: '',
    iwanttosell: false,
    iwanttobuy: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, ...userData } = formData;
    const username = email.split('@')[0];

    // Inclui o email completo no userData
    const userDataWithEmail = { ...userData, email };

    set(ref(database, 'users/' + username), userDataWithEmail)
      .then(() => {
        alert('Usuário cadastrado com sucesso!');
      })
      .catch((error) => {
        console.error("Erro ao cadastrar usuário: ", error);
      });
  };

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
        <img src={Line2} alt="" />
        <div className="cadastro2">
          <h1>QUERO ME CADASTRAR!</h1>
          <form className="cadastro2" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputName">Nome Completo</label>
                <input type="text" className="form-control" id="inputName" name="fullname" placeholder="Nome Completo" onChange={handleChange} />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Email</label>
                <input type="email" className="form-control" id="inputEmail4" name="email" placeholder="Email" onChange={handleChange} />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Senha</label>
                <input type="password" className="form-control" id="inputPassword4" name="password" placeholder="Senha" onChange={handleChange} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Endereço</label>
              <input type="text" className="form-control" id="inputAddress" name="address" placeholder="Rua dos Bobos, nº 0" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2">Complemento</label>
              <input type="text" className="form-control" id="inputAddress2" name="complement" placeholder="Apartamento, hotel, casa, etc." onChange={handleChange} />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">Cidade</label>
                <input type="text" className="form-control" id="inputCity" name="city" onChange={handleChange} />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputEstado">Estado</label>
                <select id="inputEstado" className="form-control" name="state" onChange={handleChange}>
                  <option value="">Escolher...</option>
                  <option value="PE">PE</option>
                  <option value="RN">RN</option>
                  <option value="PB">PB</option>
                  <option value="RJ">RJ</option>
                  <option value="SP">SP</option>
                  <option value="CE">CE</option>
                  <option value="BA">BA</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="inputCEP">CEP</label>
                <input type="text" className="form-control" id="inputCEP" name="cep" onChange={handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck1" name="iwanttosell" onChange={handleChange} />
                <label className="form-check-label" htmlFor="gridCheck1">
                  Eu quero vender
                </label>
                <br />
                <input className="form-check-input" type="checkbox" id="gridCheck2" name="iwanttobuy" onChange={handleChange} />
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
            <img src={Group20} alt="SUPORTE" />
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

export default App;
