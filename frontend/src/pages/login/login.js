import React, {useState} from "react";
import './login.css';
import {FaLock} from "react-icons/fa";
import {MdEmail} from "react-icons/md"
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {login} from "../../api/auth.js";
import {searchMessages} from "../../api/message.js";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login(){
    const navigate = useNavigate();
    const [dados, setDados] = useState({email: "", password: ""});
    const salvarDadosForm = (evento) =>{
        const { name, value } = evento.target;
        setDados((state) => ({
            ...state,
            [name]: value,
        }))
    }
    const handleSubmit  =  async (evento) =>{
        evento.preventDefault();
        const authorized =  await login(dados)

        if(authorized.status === 200){
            setDados({email: "", password: ""});

    
            localStorage.removeItem('token');
            localStorage.setItem('token', authorized.authorized.data.token);

            navigate('/home');
            await searchMessages();
            toast.success(authorized.authorized.data.message);
        }
        else{
            toast.error(authorized.message);
        }
    }

    return(
        <main>
            <section className="login" id="login">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label>Email</label><br></br>
                    <MdEmail className="icons"/>
                    <input type="text" id="usuario"  name="email"
                     placeholder="E-mail" value={dados.email} onChange={salvarDadosForm} required/><br></br><br></br>
                    <label>Senha</label><br></br>
                    <FaLock className="icons"/>
                    <input type="password" id="senha" name="password" 
                    placeholder="Senha" value={dados.password} onChange={salvarDadosForm} required /><br></br><br></br>
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