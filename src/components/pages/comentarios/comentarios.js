import React from "react";
import './style.css';
import Header from "../../header/header";
import Footer from "../../footer/footer";

function Comentarios() {
    return (
        <>
            <Header/>
            <div id='banner'></div>

            <div className="container">
                <div className="comentarios">
                    <div className="avaliacao">
                        <div className="caixa">
                            <img className="image" src="https://br.web.img3.acsta.net/c_80_80/commons/v9/common/empty/empty_avatar.png" alt=""/>
                        </div>
                        <div className="usuario">
                            <h1>Daniel Barral</h1>
                        </div>
                        <div className="nota">★★★★★</div>
                        <div className="texto">
                            <p>Filme sensacional. Foi um dos melhores filmes de heróis que já assisti. Robert Pattinson ficou incrível e combina muito bem com o personagem. Parabéns Matt Reeves!!</p>
                        </div>
                    </div>

                    <div className="avaliacao">
                        <div className="caixa">
                            <img className="image" src="https://br.web.img3.acsta.net/c_80_80/commons/v9/common/empty/empty_avatar.png" alt=""/>
                        </div>
                        <div className="usuario">
                            <h1>Dudu Silva</h1>
                        </div>
                        <div className="nota">★★★★★</div>
                        <div className="texto">
                            <p>Sombrio e com um toque de loucura, the batman é um dos melhores filmes do morcego, mas também achei o filme longo demais</p>
                        </div>
                    </div>

                    <div className="avaliacao">
                        <div className="caixa">
                            <img className="image" src="https://br.web.img3.acsta.net/c_80_80/avatar/BR/5/2/6/B20151203221258660687625/img/cjh1v32m.ka3.jpg"/>
                        </div>
                        <div className="usuario">
                            <h1>Nelson J</h1>
                        </div>
                        <div className="nota">★★★★★</div>
                        <div className="texto">
                            <p>Excelente roteiro, ator principal e coadjuvantes. Pattinson manda bem, embora eu mesmo não esperasse, sombrio, rústico, refém de Alfred e Gordon como figuras paternas e morais. O filme o mostra evoluindo da vingança para a esperança, uma Mulher Gato muito determinada e um vilão de primeira, o Charada, e a expectativa de ascensão do Pinguim. Não perca! Nada cansativo. Boas recordações do Batman, o grande detetive furtivo dos anos 60, que aprisionava e embolava os capangas dos vilões, mas desta vez nada pop.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Comentarios;
