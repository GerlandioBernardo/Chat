import React, {useState} from "react";
import './cadastro.css';
import {FaLock, FaUser} from "react-icons/fa";
import {MdEmail} from "react-icons/md"
import {signup} from "../../api/auth.js";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from "react-router-dom";

export default function Cadastro(){
    const navigate = useNavigate();
    const [dados, setDados] = useState({name: "", email: "", password: ""}); 

    const salvarDadosForm= (e) =>{
            const { name, value } = e.target;
            setDados((state) => ({
                ...state,
                [name]: value,
            }));

    }
    const handleSubmit = async (evento) =>{
        evento.preventDefault();

        const user = await signup(dados)
        // localStorage.removeItem('token');
        localStorage.setItem('token', user.user.data.token);
        if(user.status === 201){
            setDados({name: "", email: "", password: ""});
            navigate('/home');
            toast.success(user.message)
        }
        else{
            toast.error(user.message);
        }

    }
    return(
        <main>
            <section className="cadastro" id="cadastro">
                <h1>Cadastro</h1>
                <form onSubmit={handleSubmit}>
                   <label>Nome</label><br></br>
                   <FaUser className="iconsPaginaCadastro"/>
                   <input type="text" id="nome"name="name" placeholder="Nome" value={dados.name} onChange={salvarDadosForm} required/><br></br><br></br>
                   <label>E-mail</label><br></br>
                   <MdEmail className="iconsPaginaCadastro"/>
                   <input type="text" id="email" name="email" placeholder="E-mail"value={dados.email} onChange={salvarDadosForm}  required/><br></br><br></br>
                   <label>Senha</label><br></br>
                   <FaLock className="iconsPaginaCadastro"/>
                   <input type="password" id="senha" name="password" placeholder="Senha" value={dados.password} onChange={salvarDadosForm}  required/><br></br><br></br>
                   <button type="submit" id="buttonCadastro">Cadastrar</button>
                </form>

            </section>
        </main>
    )
}