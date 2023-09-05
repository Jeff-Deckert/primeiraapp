import React from 'react';
import './style.css';
import { Link,  } from "react-router-dom";
import Logo from '../../assets/Batman-logo-black-and-white-picture_2560x1600.jpg';



function Header (){
  


    return (
        
        <header>
          <img id= 'logo' src={Logo} />
             <nav>
                <ul>
                    <Link style={{ textDecoration: 'none'}} to= '/'>
                      <li>Home</li>
                    </Link>
                    <Link style={{ textDecoration: 'none'}}to= '/Contato'>
                     <li>Contato</li>
                    </Link>
                    <Link style={{ textDecoration: 'none'}}to= '/Fotos'>
                      <li>Fotos</li> 
                    </Link>  
                     <Link style={{ textDecoration: 'none'}}to= '/Comentarios'>
                      <li>Comentarios</li>   
                    </Link>
                    <Link style={{ textDecoration: 'none'}}to= '/Formulario'>
                      <li>Formulario</li>   
                    </Link>
                    
                    
                   
                </ul>
            </nav>
        </header>
    )
}



export default Header;
