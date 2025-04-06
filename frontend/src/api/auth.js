import axios from "axios";


export  async function signup(newUser){
    try {
        const user = await axios.post('http://localhost:3333/api/auth/signup', newUser);
        return {status: user.status, message: user.data.message, user};

    } catch (error) {
        if (error.response) {
            const {data } = error.response;
            if (data.error) {
                return { 
                    message: data.error.message
                };
            }
            else if (data.errors) {
                const MessagesError = Object.values(data.errors)
                    .map(err => err._errors?.[0])
                    .join("  ");

                return { 
                    message: MessagesError 
                };
            }
            return {
                message: data.message
            };
        }
        if (error.request) {
            return { 
                message: "Falha na conexão com o servidor tente novamente mais tarde." 
            };
        }
    }
}

export async function login (user){
    try {
        const authorized = await axios.post('http://localhost:3333/api/auth/login', user);
        return {status: authorized.status, message: authorized.data.message, authorized};
    } catch (error) {
       if(error.response){
            const {data } = error.response;
            if (data.error) {
                return { 
                    message: data.error.message
                };
            }
            return { 
                message: data.message
            };
       }
       if(error.request){
            return{
                message: "Falha na conexão com o servidor tente novamente mais tarde."
            }
       } 
    }
}

export async function refleshToken(userId){
    try {
        const token = await axios.get('http://localhost:3333/api/auth/reflesh', userId);
        return token.data.token;
    } catch (error) {
        return error;
    }

}