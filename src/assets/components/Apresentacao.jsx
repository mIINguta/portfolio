import React from "react";
import Eu from '../image/img-apresentacao2.png';

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
                    <a href="https://www.linkedin.com/in/gustavominguta/" target="__blank" title={`${descricaoLink} Linkedin`}> <i class="fa-brands fa-linkedin-in"></i> Linkedin</a>
                    <a href="https://github.com/mIINguta" target="_blank"  title={`${descricaoLink} Github`} > <i class="fa-brands fa-github"></i> GitHub</a>
                </div>
                </div>
                <figure>
                    <img src={Eu} alt={descricaoImg} title={descricaoImg} />
                </figure>
        </section>
        </>
    )
}