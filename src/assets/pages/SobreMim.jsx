import React from "react";
import Eu from '../image/eu.jpeg';


export default function SobreMim(){
    const descricaoImg = "Imagem Gustavo Minguta"
    return(
        <>
        <section className="sec-sobre">
            <figure className="img-sobre">
                <img src={Eu} alt={descricaoImg}title={descricaoImg}/>
            </figure>

            <div className="div-sobre">
                <h1><span>SOBRE MIM</span></h1>
                <h2>Belford Roxo, Rio de Janeiro</h2>
                <p>Tenho 23 anos, sou cristão, desenvolvedor e baterista. Gosto de ler, assistir documentários e séries em meu tempo livre, também gosto de futebol, vôlei e basquete.</p>
                <p><span>Hard Skills</span>: Html, Css, Java Script, NodeJs, ReactJs, MySQL</p>
                <p><span>Soft Skills</span>: Proatividade, Comunicação, Paciência, Dedicação e Sinceridade</p>

                <ul className="social-sobre">
                    <li><a href="https://www.instagram.com/gustavominguta/" target="_blank" ><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="https://twitter.com/m1nguta" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                    <li> <a href="https://www.facebook.com/gustavo.minguta/" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/gustavominguta/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
                <div className="btn-sobremim">
                <a href="public/curriculo-novo.pdf" download="curriculo-novo.pdf">Curriculo</a>
                <a href="mailto:gustavo.minguta@gmail.com">E-mail</a>
                </div>
            </div>

        </section>
        
        </>
    )
}