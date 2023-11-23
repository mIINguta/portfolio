import {React, useState} from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Experiencia from '../pages/Experiencia';



export default function Header(){

    return(
        <>
        <header>
            <BrowserRouter>
            <nav>
                <button className="btn-hamburg ">
                    <i class="fa-solid fa-bars">
                        </i></button>
                <h2 className="h2-header">Portfólio</h2>
                <ul className="ul-header">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about"> Sobre mim</Link></li>
                    <li><Link to="/exp">Experiência</Link></li>
                    <li><Link to="/proj">Projetos</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/exp" element={<Experiencia/>}></Route>
            </Routes>
        </BrowserRouter>
        </header>
        </>
    )
}