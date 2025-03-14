import express from "express";
import {hashSync} from "bcryptjs";
import {prisma} from "../config/prisma.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

function generateToken(id){
    const token = jwt.sign({id}, process.env.CHAVE_SECRETA, {expiresIn:"24h"} )
    return  token;
}

export const signup = async (req, res)=>{
    try {
        const {name, password, email, profilePicture} = req.body;
        const userExists = await prisma.user.findUnique({
            where:{
                email
            }
        });
        if(userExists){
            res.status(404).json({message: "Error usuario já cadastrado"});
            return;
        }
        const hashedPassword  = hashSync(password, 10);
        const user = await prisma.user.create({
            data:{
                name,
                password: hashedPassword,
                email,
                profilePicture,
                messagesArray:{
                    create: []
                }
            }
        })
        res.status(201).json({
            message: "Usuario criado com sucesso",
            user: {...user, password: undefined},
            token: generateToken(user.id),
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
}