
import React from "react";
import { useState } from "react";


export default function Experiencia(){
    const [titulo, setTitulo] = useState();
    const [descricao, setDescricao] = useState();
    const [local, setLocal] = useState();
    const [periodo, setPeriodo] = useState();
function definirExp(e){
    const tituloSWT = e.target.textContent;
    setTitulo(e.target.textContent);

    switch(tituloSWT){
    case "Suporte": 
        setDescricao("Responsável pela manuntenção de todas as máquinas e impressoras do escritório.");
        setPeriodo("Jan 2015 - Atualmente");
        setLocal("MM Assessoria Contábil");
        break;
   
    case "Agente de Registro":
        setDescricao("Responsável pelo ponto de atendimento da AR Savez no escritório da MM Assessoria Contábil. Faço atendimentos presenciais ou por vídeo conferência aos clientes que desejam adquirir certificados digitais.");
        setPeriodo("Agosto 2022 - Atualmente");
        setLocal("Savez Certificadora / MM Assessoria Contábil");
        break;

    case "Desenvolvedor Front-End":
        setDescricao("Após frustrações pessoas, resolvi voltar ao foco. No início de 2023, tive a oportunidade de estudar na escola Vai na Web, com o curso de Desenvolvimento Front-End. Realizei diversos projetos ao decorredor do curso, também realizei projetos pessoais. Consigo hoje utilizar esse conhecimento também no escritório onde trabalho, algo que é muito gratificante.");
        setPeriodo("Janeiro 2023 - Dezembro 2023");
        setLocal("Vai na Web");
        break;
    case "Desenvolvedor .NET":
        setDescricao("Disponibilizado pela plataforma da DIO, pude entra no mundo .NET, aprendendo seus princípios básicos e intermediários, através de diversos projetos realizados ao decorrer do bootcamp.");
        setPeriodo("Março 2023 - Abril 2024");
        setLocal("DIO");
        break;
    break;
}
}

    return(

        <>
        <section className="sec-experiencia">
            <aside>
            <h1>EXPERIÊNCIA</h1>
                <ul>
                    <li><button onClick={definirExp}>Suporte</button></li>
                    <li><button onClick={definirExp}>Agente de Registro</button></li>
                    <li><button onClick={definirExp}>Desenvolvedor Front-End</button></li>
                    <li><button onClick={definirExp}>Desenvolvedor .NET</button></li>
                </ul>
            </aside>
                <section className="conteiner-exp">
                    <div className="titulos">
                        <h2 className="principal">{titulo}</h2>
                        <p className="periodo">{periodo}</p>
                    </div>
                    <p className="local"><span >{local}</span></p>
                    <p className="descricao">{descricao}</p>


                </section>
            
        </section>
        </>
    )
}