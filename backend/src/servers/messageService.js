import express from "express";
import {prisma} from "../config/prisma.js";

export const getMessages = async()=>{
    const messages = await prisma.message.findMany();
    return messages
}

export const createMessage = async (id, text)=>{
    const messages = await prisma.user.update({
        where:{
            id
        },
        data:{
            messagesArray:{
                create:{
                    text
                }
            }
        },
        select:{
            messagesArray: true,
        }
    })
    return messages;

}