import React from "react";
import './home.css';
import {FaSearch, FaPaperPlane} from "react-icons/fa";
import img from "../../assets/icons/homem.png"
import chat from "../../assets/icons/web-chat.png"
import enviar from "../../assets/icons/enviar-mensagem.png";
import {Link} from "react-router-dom";

export default function home(){
    return(
        <main>
            <section className="usuarios" id="usuarios">
                <div id="campo-pesquisa">
                    <FaSearch id="icon"/>
                    <input type="text" id="pesquisa" placeholder="Pesquisar..."/>
                </div>
                

            </section>
            <section className="chat" id="chat">
                <div className="tituloChat" id="tituloChat">
                    <span>
                        <img src={chat} alt="chat"/>
                    </span>
                    <span>
                        <p>ChatAPP</p>
                    </span>

                </div>
                <div className="mensagens" id="mensagens"></div>
                <div className="enviaMensagem" id="enviaMensagem">
                        <input type="text" id="inputEnviaMensagem" 
                        placeholder="Envie sua mensagem"/>
                        <button> <img src={enviar} alt="enviar" className="iconeEnviar"/></button>
                 </div>

            </section>

        </main>
    )
}