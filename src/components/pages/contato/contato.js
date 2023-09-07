import React from 'react';
import './style.css';
import Header from '../../header/header';
import Footer from '../../footer/footer';

const Contato = () => {
  const transparentBackground = { backgroundColor: 'transparent' };

  return (
    <>
      <Header />
      <div id='banner'></div>
      <div className="FormContainer">
        <div className="container">
          <h1>Entre em Contato</h1>
          <form style={transparentBackground} action="./contato.html" method="post">
            <div className="form-group">
              <label htmlFor="fname">Nome</label>
              <input type="text" id="fname" name="firstname" placeholder="Seu nome" style={transparentBackground} />
            </div>

            <div className="form-group">
              <label htmlFor="lname">Sobrenome</label>
              <input type="text" id="lname" name="lastname" placeholder="Sobrenome" style={transparentBackground} />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Sua mensagem</label>
              <textarea name="subject" id="subject" placeholder="Digite aqui a sua Mensagem" style={transparentBackground}></textarea>
            </div>

            {/* Botão de envio */}
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      {/* Provavelmente você quis usar um elemento de rodapé */}
      <Footer />
    </>
  );
};

export default Contato;
