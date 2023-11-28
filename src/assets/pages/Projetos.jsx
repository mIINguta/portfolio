import React from "react";
import SelfCare from '../image/projetos/selfcare.png';
import GetCoffee from '../image/projetos/get-coffee.png';
import ProjetosD from "../components/ProjetosD";
import NatalCodelandia from "../image/projetos/natal-codelandia.png";
import Blogames from "../image/projetos/blogames.png";
import MMcontabilidade from "../image/projetos/mmcontabilidade.png";
import Portfolio1 from "../image/projetos/portfolio1.png"
import Portfolio2 from "../image/projetos/portfolio2.png"
import ERPmm from "../image/projetos/erp-mm.png"
import todoListLocal from "../image/projetos/todo-list-local.png";
import todoListPessoal from "../image/projetos/todo-list-pessoal.png";


export default function Projetos(props){
    return(
        <>
            <section className="sec-projetos">
                <h1>PROJETOS</h1>
                <section className="conteiner-projetos">
                <ProjetosD imagem = {SelfCare} nome = "Self Care" descricao = "Projeto do curso da Vai na Web, com foco em responsividade, utilizando apenas HTML e CSS."/>
                <ProjetosD imagem = {GetCoffee} nome= "GetCoffee" descricao = "Projeto do curso da Vai na Web, com foco em responsividade, utilizando apenas HTML e CSS"/>
                <ProjetosD imagem = {NatalCodelandia} nome= "Natal Codelândia" descricao = "Projeto do curso da Vai na Web, com foco em responsividade, utilizando HTML, CSS e JS para menu Hamburguer"/>
                <ProjetosD imagem = {Blogames} nome= "BloGames" descricao = "Projeto do curso da Vai na Web, com foco em responsividade, utilizando HTML, CSS e JS para menu Hamburguer"/>
                <ProjetosD imagem = {MMcontabilidade} nome= "MM Contabilidade" descricao = "Um dos meus primeiros projetos pessoais para o escritório onde trabalho. Trata-se de um portal onde mostra todos os serviços e a equipe que compõe o escritório onde trabalho., utilizando HTML, CSS e JS"/>
                <ProjetosD imagem = {Portfolio1} nome= "Portfólio" descricao = "Meu primeiro portfólio, assim que iniciei o curso do Vai na Web. Feito utilizando HTML, CSS e JS"/>
                <ProjetosD imagem = {Portfolio2} nome= "Portfólio 2" descricao = "Meu segundo portfólio, já no decorrer curso do Vai na Web. Feito utilizando HTML, CSS e JS, EJS e NodeJs. "/>
                <ProjetosD imagem = {ERPmm} nome= "ERP MM Contabilidade" descricao = "Sistema Web para que os contadores tivessem um controle financeiro melhor, onde é possivel cadastrar as empresas e os pagamentos mensais efetuados. As tecnologias utilizadas foram HTML, CSS, Java Script, EJS, Node JS e Banco de Dados MSQL"/>
                <ProjetosD imagem = {todoListLocal} nome= "ERP MM Contabilidade - TodoList" descricao = "Todo List que pertence ao Sistema da Web da MM. As tecnologias utilizadas foram HTML, CSS, Java Script, EJS, Node JS e Banco de Dados MSQL"/>
                <ProjetosD imagem = {todoListPessoal} nome= "TodoList" descricao = "Todo List que salva os dados em localStorage do navegador. As tecnologias utilizadas foram HTML, CSS, Java Script."/>
                </section>
            </section>
        </>
        
    )

   
}
    <Projetos imagem= {SelfCare} />