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
                <ProjetosD imagem = {SelfCare} nome = "Self Care" descricao = "Projeto do curso da Vai na Web, com foco em responsividade, utilizando apenas HTML e CSS." link_visu = "https://miinguta.github.io/self-care_VNW/" link_repo = "https://github.com/mIINguta/self-care_VNW"/>
                <ProjetosD imagem = {GetCoffee} nome= "GetCoffee" descricao = "Projeto do curso da Vai na Web, com foco em responsividade, utilizando apenas HTML e CSS" link_repo = "https://github.com/mIINguta/get-coffee_VNW" link_visu ="https://miinguta.github.io/get-coffee_VNW/"/>
                <ProjetosD imagem = {NatalCodelandia} nome= "Natal Codelândia" descricao = "Projeto do curso da Vai na Web, com foco em responsividade, utilizando HTML, CSS e JS para menu Hamburguer" link_repo="https://github.com/mIINguta/natal_codelandia" link_visu="https://miinguta.github.io/natal_codelandia/"/>
                <ProjetosD imagem = {Blogames} nome= "BloGames" descricao = "Projeto do curso da Vai na Web, com foco em responsividade, utilizando HTML, CSS e JS para menu Hamburguer" link_repo="https://github.com/mIINguta/blogames_VNW" link_visu="https://miinguta.github.io/blogames_VNW/"/>
                <ProjetosD imagem = {Portfolio1} nome= "Portfólio" descricao = "Meu primeiro portfólio, assim que iniciei o curso do Vai na Web. Feito utilizando HTML, CSS e JS" link_repo="https://github.com/mIINguta/meu-portfolio" link_visu="https://miinguta.github.io/meu-portfolio/"/>
                <ProjetosD imagem = {Portfolio2} nome= "Portfólio 2" descricao = "Meu segundo portfólio, já no decorrer curso do Vai na Web. Feito utilizando HTML, CSS e JS, EJS e NodeJs." link_repo="https://github.com/mIINguta/portfolio" link_visu="https://portfolio-miinguta.vercel.app/"/>
                <ProjetosD imagem = {todoListLocal} nome= "ERP MM Contabilidade - TodoList" descricao = "Todo List que pertence ao Sistema da Web da MM. As tecnologias utilizadas foram HTML, CSS, Java Script, EJS, Node JS e Banco de Dados MSQL"link_repo="" link_visu=""/>
                <ProjetosD imagem = {todoListPessoal} nome= "TodoList" descricao = "Todo List que salva os dados em localStorage do navegador. As tecnologias utilizadas foram HTML, CSS, Java Script."link_repo="https://github.com/mIINguta/todo-list" link_visu="https://miinguta.github.io/todo-list/"/>
                <ProjetosD imagem = {MMcontabilidade} nome= "MM Contabilidade" descricao = "Trata-se de um portal onde mostra todos os serviços e a equipe que compõe o escritório onde trabalho., utilizando HTML, CSS e JS" link_repo="https://github.com/mIINguta/projeto-site-mmac" link_visu="https://miinguta.github.io/projeto-site-mmac/"/>
                <ProjetosD imagem = {ERPmm} nome= "ERP MM Contabilidade" descricao = "Sistema Web para que os contadores tivessem um controle financeiro melhor, onde é possivel cadastrar as empresas e os pagamentos mensais efetuados. As tecnologias utilizadas foram HTML, CSS, Java Script, EJS, Node JS e Banco de Dados MSQL"link_repo= "" link_visu=""/>
                </section>
            </section>
        </>
        
    )

   
}
    <Projetos imagem= {SelfCare} />