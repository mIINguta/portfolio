import React from "react";
import { Figure, Img, Info, Descricao, Projeto, Nome, A, Buttons} from "./styles/componentsStyles";

export default function ProjetosD(props){
    return(
        <>
        <Projeto>
            <Figure>
                <Img src={props.imagem} alt={props.nome} title={props.nome} />
            </Figure> 
            <Info>
            <Nome><span>{props.nome}</span></Nome>
            <Descricao>{props.descricao}</Descricao>
            </Info>
            <Buttons>
                <A href={props.link_repo} target="_blank" className={props.link_repo == "" ? 'btn-desativo': 'btn-ativo'}>
                    <i class="fa-brands fa-github"></i> Repositório</A>
                <A href={props.link_visu} target="_blank" className={props.link_repo == "" ? 'btn-desativo': 'btn-ativo'}><i class="fa-solid fa-globe"></i> Visualizar</A>
            </Buttons>
        </Projeto>
        </>
    )
}