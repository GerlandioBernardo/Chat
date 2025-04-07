import axios from "axios";
import {useEffect} from 'react';

export default function ProfileUser(){
    

        useEffect (() =>{

        async function createProfile (){

        const users = await axios.get('http://localhost:3333/api/user/');
        const usuarios = document.querySelector(".perfil");
        usuarios.innerHTML = " ";

        for(let i = 0; i<users.data.length; i++){
            const perfilUsuario = document.createElement('div');
            perfilUsuario.className = "perfilUsuario";

            let imgUsuario = document.createElement('div');
            imgUsuario.className = "imagemUsuario";
            const imgPerfil = document.createElement('img');
            imgPerfil.src = users.data[i].profilePicture;
            imgPerfil.alt = 'Imagem de Perfil';

            const divNome = document.createElement('div');
            const  nome = document.createElement('p');
            nome.textContent = users.data[i].name;
            nome.className = 'nome';

            const frase = document.createElement('p');
            frase.textContent = " Estou no Chat";
            frase.id = "frase";

            imgUsuario.appendChild(imgPerfil);
            divNome.appendChild(nome);
            divNome.appendChild(frase);
            perfilUsuario.appendChild(imgUsuario);
            perfilUsuario.appendChild(divNome);
            usuarios.appendChild(perfilUsuario);

        }
    }

     createProfile();

    }, []);
}