import express from "express"
import {prisma} from "../config/prisma.js";

export const findAllUsers = async ()=>{
    const users = await prisma.user.findMany({
        select:{
            id: true,
            name: true,
            email: true,
            profilePicture: true,
        }
    });
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
        },
        select:{
            id: true,
            name: true,
            email: true, 
            profilePicture: true
        }
    })
    return user;
}
export const getProfilePicture = async (id)=>{
    const urlProfilePicture = await prisma.user.findUnique({
        where:{
            id
        },
        select:{
            profilePicture: true,
        }
    })
    return urlProfilePicture;
}
export const updateProfilePicture = async (id, profilePicture)=>{
    const user = await prisma.user.update({
        where:{
            id
        },
        data:{
            profilePicture
        },
        select:{
            id: true,
            name: true,
            email: true, 
            profilePicture: true
        }
    })
    return user;
}
export const deleteProfilePicture = async (id, profilePictureDefault)=>{
    const user = await prisma.user.update({
        where:{
            id
        },
        data:{
            profilePicture: profilePictureDefault
        },
        select:{
            id: true,
            name: true,
            email: true, 
            profilePicture: true
        }
    })
    return user;
}