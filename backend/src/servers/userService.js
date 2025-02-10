import express from "express"
import {prisma} from "../config/prisma.js";


export const createUser = async (newUser)=>{
    const user = await prisma.user.create({
        data:{
            name: newUser.name,
            password: newUser.password,
            user: newUser.user,
            messagesArray:{
                create: []
            }
        }
    })
    return user;

}