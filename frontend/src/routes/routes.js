import React from "react";
import {Routes, Route} from "react-router-dom";
import Login from '../pages/login/login.js';
import Cadastro from '../pages/cadastro/cadastro.js';

export default function routes(){
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
        </Routes>
    )
}