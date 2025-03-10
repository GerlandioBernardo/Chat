import express from "express"
import {prisma} from "../config/prisma.js";

export const findAllUsers = async ()=>{
    const users = await prisma.user.findMany();
    return users;
}


export const createUser = async (newUser)=>{
    const user = await prisma.user.create({
        data:{
            name: newUser.name,
            password: newUser.password,
            user: newUser.user,
            profilePicture: newUser.profilePicture,
            messagesArray:{
                create: []
            }
        }
    })
    return user;

}