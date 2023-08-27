import React from 'react';
import './style.css';
import Logo from '../../assets/Batman-logo-black-and-white-picture_2560x1600.jpg';

function Footer() {
  return (
    <footer>
      <img id="Logo" src={Logo} style={{ objectFit: 'contain' }} alt="Logo" />
      <span>Todos os direitos reservados ©</span>
      <span>Desenvolvido por Jeff Decker</span>
      
      {/* Navegação */}
      <nav className="footer-navigation">
        <ul className="footer-list">
          <li><a href="/">Home</a></li>
          <li><a href="/contato">Contato</a></li>
          <li><a href="/fotos">Fotos</a></li>
          <li><a href="/comentarios">Comentários</a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
