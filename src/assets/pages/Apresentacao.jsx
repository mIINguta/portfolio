import React from "react";
import Eu from '../image/img-apresentacao2.png';
import { A } from "../components/styles/componentsStyles";

export default function Apresentacao(){
const descricaoImg = 'Imagem Jovem Programador';
const descricaoLink ='Abrir link para';
    return(
        <>
        <section className="sec-apresentacao">
                <div className="div-apresentacao">
                    <p>OLÁ, EU SOU</p>
                    <h1 className="nome-apresentacao">Gustavo Minguta</h1>
                    <h2>Desenvolvedor Front-End</h2>
                <div className="btn-apresentacao">
                    <A href="https://www.linkedin.com/in/gustavominguta/" target="__blank" title={`${descricaoLink} Linkedin`}> <i class="fa-brands fa-linkedin-in"></i> Linkedin</A>
                    <A href="https://github.com/mIINguta" target="_blank"  title={`${descricaoLink} Github`} > <i class="fa-brands fa-github"></i> GitHub</A>
                </div>
                </div>
                <figure>
                    <img src={Eu} alt={descricaoImg} title={descricaoImg} />
                </figure>
        </section>
        </>
    )
}