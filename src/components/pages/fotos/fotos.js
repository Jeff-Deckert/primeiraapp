import React from "react";
import './style.css';
import Header from "../../header/header";
import Batman from "../../../assets/batman1.webp";
import Robert from "../../../assets/the-batman-robert-pattinson.jpeg";
import mulhergato from "../../../assets/mulher-gato.jpg";
import Charada from "../../../assets/batman-robert-pattinson-filme_zy5q.png";
import Imagem from "../../../assets/20200308-gordon-art.jpg";
import Batimovel from "../../../assets/batimovel.jpg";
import Footer from "../../footer/footer";
import Charada1 from "../../../assets/The-Batman-Filme-2022.jpg";
import Batman2 from "../../../assets/images.jpg"
import Images from "../../../assets/images (1).jpg";
import Chara from "../../../assets/charada.jpg";

function Fotos() {
  return (
    <>
      <Header />
      <div id='banner'></div>
      <div className="galeria">
        <figure className="galeria__item">
          <img src={Batman} alt="Batman" className="galeria__img" />
        </figure>
        <figure className="galeria__item">
          <img src={Robert} alt="Robert" className="galeria__img" />
        </figure>
        <figure className="galeria__item">
          <img src={mulhergato} alt="Mulher-Gato" className="galeria__img" />
        </figure>
        <figure className="galeria__item">
          <img src={Charada} alt="Charada" className="galeria__img" />
        </figure>
        <figure className="galeria__item">
          <img src={Imagem} alt="Imagem" className="galeria__img" />
        </figure>
        <figure className="galeria__item">
          <img src={Batimovel} alt="Batimóvel" className="galeria__img" />
        </figure>
        <figure className="galeria__item">
          <img src={Charada1} alt="Charadal" className="galeria__img" />
        </figure>
        <figure className="galeria__item">
          <img src={Batman2} alt="Batman2" className="galeria__img" />
        </figure>
        <figure className="galeria__item">
          <img src={Images} alt="images1" className="galeria__img" />
        </figure>
        <figure className="galeria__item">
          <img src={Chara} alt="chara" className="galeria__img" />
        </figure>
      </div>
      <Footer />
    </>
  )
}

export default Fotos;
