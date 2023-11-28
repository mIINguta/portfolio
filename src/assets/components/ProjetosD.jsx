import React from "react";
import { Figure, Img, Figcaption, Descricao, Projeto, Nome} from "./styles/componentsStyles";


export default function ProjetosD(props){
    return(
        <>
        <Projeto>
                    <Figure>
                        <Img src={props.imagem} alt="" />
                        <Figcaption>
                            <Nome><span>{props.nome}</span></Nome>
                            <Descricao>{props.descricao}</Descricao>
                       </Figcaption>
                         
                    </Figure>
        </Projeto>
        </>
    )
}