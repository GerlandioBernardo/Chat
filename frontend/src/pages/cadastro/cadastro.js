import React from "react";
import './cadastro.css';
import {FaLock, FaUser} from "react-icons/fa";

export default function cadastro(){
    return(
        <main>
            <section className="cadastro" id="cadastro">
                <h1>Cadastro</h1>
                <form>
                   <label>Nome</label><br></br>
                   <FaUser className="iconsPaginaCadastro"/>
                   <input type="text" id="nome" placeholder="Nome" required/><br></br><br></br>
                   <label>Usuário</label><br></br>
                   <FaUser className="iconsPaginaCadastro"/>
                   <input type="text" id="usuario" placeholder="Usuário" required/><br></br><br></br>
                   <label>Senha</label><br></br>
                   <FaLock className="iconsPaginaCadastro"/>
                   <input type="password" id="senha" placeholder="Senha" required/><br></br><br></br>
                   <button id="buttonCadastro">Cadastrar</button>
                </form>

            </section>
        </main>
    )
}