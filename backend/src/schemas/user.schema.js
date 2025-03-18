import {z} from "zod";

const MessageSchema = z.object({
    text: z.string()
    .trim()
    .min(1, {message: "A mensagem deve ter pelo menos 1 caracteres"})
    .max(255, {message: "A mensagem deve ter no máximo 255 caracteres"}),

    date: z.date().default(()=> new Date()),

})

const UserSchema = z.object({

    name:z.string()
    .trim()
    .min(3, {message:"Nome deve ter no pelo menos 3 caracteres"})
    .max(255, {message: "Nome deve ter no maximo 255 caracteres"}),


    email:z.string()
    .trim()
    .email({message: "E-mail invalido"})
    .max(255, {message: "E-mail deve ter no maximo 255 caracteres"}),

    password: z.string()
    .trim()
    .min(6, {message: "Senha deve ter pelo menos 6 caracteres"})
    .max(255, {message: "Senha deve ter no máximo 255 caracteres"}),

    messagesArray: z.array(MessageSchema).default([]),

    profilePicture: z.string().optional()
})

export  {UserSchema, MessageSchema};