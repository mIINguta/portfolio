import {React, useState, useRef, useEffect} from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Experiencia from '../pages/Experiencia';
import SobreMim from "../pages/SobreMim";
import Apresentacao from "./Apresentacao";
import Projetos from "../pages/Projetos";

export default function Header(){
const [headerClass, setHeaderClass] = useState(false);
    return(
        <>
        <BrowserRouter>
        <header>
            <nav>
                <button onClick={() => setHeaderClass(!headerClass)} className={`btn-hamburg ${headerClass ? 'desativo': 'ativo'}`}  title="Abrir Menu">
                    <i class="fa-solid fa-bars">
                        </i></button>
                <h2 className={`h2-header ${headerClass ? 'desativo': 'ativo' }`}>Portfólio</h2>
                <ul className={`ul-header ${headerClass ? 'ativo': 'desativo' }`}>
                <button onClick={() => setHeaderClass(!headerClass)}className={`btn-hamburg-close ${headerClass ? 'ativo': 'desativo'}`} title="Fechar">
                <i class="fa-solid fa-xmark"></i></button>
                    <li><Link to="/" title="Home">Home</Link></li>
                    <li><Link to="/sobre" title="Sobre Mim"> Sobre mim</Link></li>
                    <li><Link to="/exp" title="Experiência">Experiência</Link></li>
                    <li><Link to="/projetos" title="Projetos">Projetos</Link></li>
                </ul>
            </nav>
        </header>
            <Routes>
                <Route path="/" element={<Apresentacao/>}></Route>
                <Route path="/sobre" element={<SobreMim/>}></Route>
                <Route path="/exp" element={<Experiencia/>}></Route>
                <Route path="/projetos" element={<Projetos/>}></Route>
            </Routes>
        </BrowserRouter>
        </>
           
       
            
     
)
}