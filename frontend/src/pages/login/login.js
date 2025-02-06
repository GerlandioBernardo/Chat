import React from "react";
import './login.css';
import {FaLock, FaUser} from "react-icons/fa";
import {Link} from "react-router-dom";

export default function login(){
    return(
        <main>
            <section className="login" id="login">
                <h1>Login</h1>
                <form>
                    <label>Usuário</label><br></br>
                    <FaUser className="icons"/>
                    <input type="text" id="usuario" required placeholder="Usuário"/><br></br><br></br>
                    <label>Senha</label><br></br>
                    <FaLock className="icons"/>
                    <input type="password" id="senha" required placeholder="Senha"/><br></br><br></br>
                    <span className="conta">
                        <span>Não tem conta? </span>
                        <span><Link to="/cadastro">Cadastra-se</Link></span>
                    </span><br></br><br></br>
                    <button id="buttonLogin">Entrar</button>
                </form>

            </section>
        </main>
    )
}