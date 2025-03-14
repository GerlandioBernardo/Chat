import express from "express"
import {prisma} from "../config/prisma.js";

export const findAllUsers = async ()=>{
    const users = await prisma.user.findMany();
    return users;
}

export const deleteUser = async (id)=>{
    const user = await prisma.user.delete({
        where:{
            id:id
        }
    })
    return user;
}

export const updateUser = async (id, updates)=>{
    const user = await prisma.user.update({
        where:{
            id: id,
        },
        data:{
            ...updates
        }
        })
        return user;
}