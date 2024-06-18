import React from 'react';
import '../assets/css/pagamento.css'
import { Link } from 'react-router-dom';

const PaymentPage = () => {
  return (
    <div>
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
              <li><Link to="/suporte">Suporte</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="img2">
        <img src="assets/img/Group 232.png" alt="" />
      </div>

      <div className="endereco-pagamento">
        <div className="box1">
          <h1>1. ENDEREÇOS</h1>
          <h2>ENDEREÇO DE ENTREGA</h2>
          <p>
            <b>Comprador: Igor Cavalcanti Moura</b><br />
            Endereço: Rua Isaac Buril, 900 <br />
            Cidade: Recife <br />
            CEP: 50741-495 | Recife- PE <br />
            Telefone: (81) 9 9523-0255
          </p>
          <button className="botao1" type="submit">INSERIR NOVO ENDEREÇO</button>
          <h2>ENDEREÇO DE COBRANÇA</h2>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="opcao1" />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Endereço de cobrança igual ao de entrega</label>
          </div>
        </div>

        <div className="box1">
          <h1>2. RESUMO DA COMPRA</h1>
          <h2>Produtos entregues por <b>Mercado Verde</b></h2>
          <p>
            <b>Arroz</b><br />
            Produção orgânica <br />
            vendedor: ONG Dois Corações <br />
            <b>Quantidade:</b> 2kg
          </p>
          <h2>Subtotal: R$20,00</h2>
          <h2><b>TOTAL: R$20,00</b></h2>
          <br />
          <h1>3. OPÇÕES DE ENTREGA</h1>
          <h2>Entrega 1 de 1 por Mercado Verde</h2>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="opcao1" />
            <label className="form-check-label" htmlFor="inlineCheckbox1"><b> Grátis:</b> 17 a 18-nov</label>
          </div>
          <br />
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="opcao1" />
            <label className="form-check-label" htmlFor="inlineCheckbox1"><b> R$ 5,50 </b> - Amanhã</label>
          </div>
          <br /><br />
          <h2>Notificações</h2>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="opcao1" />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Quero receber notificações por e-mail</label>
          </div>
        </div>

        <div className="box1">
          <h1>4. FORMAS DE PAGAMENTO</h1>
          <h2>CARTÃO DE CRÉDITO</h2>
          <form>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Titular do Cartão</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="" />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Número do Cartão</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="" />
            </div>
            <div className="form-inline">
              <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref"></label>
              <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                <option selected>Parcelas</option>
                <option value="1">1x sem juros</option>
                <option value="2">2x sem juros</option>
                <option value="3">3x sem juros</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Código de segurança</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="" />
            </div>
            <button type="button" className="botao1" data-toggle="modal" data-target="#modalExemplo">
              FINALIZAR COMPRA
            </button>
          </form>
          <div className="modal fade" id="modalExemplo" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Mercado Verde - Compra Aprovada!</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  Agora é só comemorar!<br />
                  Acompanhe seu pedido pelo nosso site na aba "Minha Conta"
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="suporte">
        <a href="mailto:mercado_verde@mercadoverde.com">
          <button className="suporte1" type="submit"><img src="assets/img/Group 20.png" alt="SUPORTE" /></button>
        </a>
      </div>

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
};

export default PaymentPage;
