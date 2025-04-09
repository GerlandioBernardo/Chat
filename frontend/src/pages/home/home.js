import React from "react";
import './home.css';
import {FaSearch} from "react-icons/fa";
import chat from "../../assets/icons/web-chat.png"
import enviar from "../../assets/icons/enviar-mensagem.png";
import  ProfileUser  from "../../api/user.js";
import { createMessage} from "../../api/message.js";

export default function home(){
    return(
        <main>
            <section className="usuarios" id="usuarios">
                <div id="campo-pesquisa">
                    <FaSearch id="icon"/>
                    <input type="text" id="pesquisa" placeholder="Pesquisar..."/>
                </div>
                <div className="perfil">
                    <ProfileUser/>
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
                <div className="mensagens" id="mensagens">
                    <div className="mensagensEnviadas">
                    </div>
                </div>
                <div className="enviaMensagem" id="enviaMensagem">
                        <input type="text" id="inputEnviaMensagem" 
                        placeholder="Envie sua mensagem"/>
                        <button id="buttonEnviar" onClick={createMessage}> <img src={enviar} alt="enviar" className="iconeEnviar"/></button>
                 </div>

            </section>

        </main>
    )

}