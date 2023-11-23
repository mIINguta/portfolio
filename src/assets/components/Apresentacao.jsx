import React from "react";
import Eu from '../image/img-apresentacao.svg';

export default function Apresentacao(){
    return(
        <>
        <section className="sec-apresentacao">
                <div className="div-apresentacao">
                    <p>OLÁ, EU SOU</p>
                    <h1 className="nome-apresentacao">Gustavo Minguta</h1>
                    <h2>Desenvolvedor Front-End</h2>
                <div className="btn-apresentacao">
                    <a href="https://www.linkedin.com/in/gustavominguta/" target="__blank"> <i class="fa-brands fa-linkedin-in"></i> Linkedin</a>
                    <a href="https://github.com/mIINguta" target="_blank" > <i class="fa-brands fa-github"></i> GitHub</a>
                </div>
                </div>
                <figure>
                    <img src={Eu} alt="" />
                </figure>
        </section>
        </>
    )
}