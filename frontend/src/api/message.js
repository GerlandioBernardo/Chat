import axios from "axios";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function createMessage (){

    try {
        const input = document.querySelector('#inputEnviaMensagem');
        const text = input.value;
        

        const token = localStorage.getItem('token');


        await axios.post('http://localhost:3333/api/user/message',
            {text},
            {
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            }
        )
        await searchMessages();

        input.value = '';
   
    } catch (error) {

        if(error.response){
            const {data } = error.response;
            if (data.error) {
                toast.error(data.error.message);
                return;
            }
            toast.error(data.message)
       }
       if(error.request){
            toast.error("Error de servidor tente novamente mais tarde")
       } 
    }

}
export async function searchMessages(){

    const messages = await axios.get('http://localhost:3333/api/user/message');
    if(!messages){
        return;
    }


    const screem = document.querySelector('.mensagensEnviadas');
    screem.innerHTML = " ";
    for (let i = 0; i < messages.data.length; i++){
        const contend = document.createElement('div');
        contend.className = "conteudo";
        contend.textContent = messages.data[i].text;
        screem.appendChild(contend);
    }
    
}