import {React, useState, useRef, useEffect} from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Experiencia from '../pages/Experiencia';
import SobreMim from "../pages/SobreMim";
import Apresentacao from "./Apresentacao";



export default function Header(){
const [headerClass, setHeaderClass] = useState(false);
    return(
        <>
        <header>
            <BrowserRouter>
            <nav>
                <button onClick={() => setHeaderClass(!headerClass)}className="btn-hamburg " title="Abrir Menu">
                    <i class="fa-solid fa-bars">
                        </i></button>
                <h2 className="h2-header">Portfólio</h2>
                <ul className={`ul-header ${headerClass ? 'ativo' : 'desativo'}`}>
                <button onClick={() => setHeaderClass(!headerClass)}className="btn-hamburg " title="Fechar">
                <i class="fa-solid fa-xmark"></i></button>
                    <li><Link to="/" title="Home">Home</Link></li>
                    <li><Link to="/sobre" title="Sobre Mim"> Sobre mim</Link></li>
                    <li><Link to="/exp" title="Experiência">Experiência</Link></li>
                    <li><Link to="/proj" title="Projetos">Projetos</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Apresentacao/>}></Route>
                <Route path="/sobre" element={<SobreMim/>}></Route>
                <Route path="/exp" element={<Experiencia/>}></Route>
                {/* <Route path="/projetos" element={<Projetos/>}></Route> */}
            </Routes>
        </BrowserRouter>
        </header>
        </>
)
}