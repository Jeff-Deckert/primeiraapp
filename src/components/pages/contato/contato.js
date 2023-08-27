import React from 'react';
import './style.css';
import Header from '../../header/header';
import Footer from '../../footer/footer';

const Contato = () => {
  return (
    <>
      <Header />
      
        <div className="container">
          <h1>Entre em Contato</h1>
          
          <label htmlFor="fname">Nome</label>
          <input type="text" id="fname" name="firstname" placeholder="Seu nome" />

          <label htmlFor="lname">Sobrenome</label>
          <input type="text" id="lname" name="lastname" placeholder="Sobrenome" />

          <label htmlFor="subject">Sua mensagem</label>
          <textarea name="subject" id="subject" placeholder="Digite aqui a sua Mensagem"></textarea>

          {/* Submit button */}
          <button type="submit">Enviar</button>
        </div>
      
      {/* You probably meant to use a footer element */}
      <Footer/>
    </>
  );
};

export default Contato;
