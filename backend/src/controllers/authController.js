import express from "express";
import {compareSync, hashSync} from "bcryptjs";
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
        const {name, password, email} = req.body;
        const profilePictureDefault = process.env.PROFILEPICTUREDEFAULT;
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
                profilePicture: profilePictureDefault,
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

export const login = async (req, res)=>{
    try {
        const {email, password} = req.body;
        const user = await prisma.user.findUnique({
            where:{
                email
            }
        })
        if(!user){
            res.status(404).json({message: "Error usuario não existente"});
            return;
        }

        const authorized  = compareSync(password, user.password);
        if(!authorized){
            res.status(401).json({message: "Senha incorreta"})
            return;
        }
        
        res.status(200).json({
            message: "Login realizado com sucesso " + user.name,
            token: generateToken(user.id)
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
}
export async function refleshToken(req, res){
    const newToken = generateToken(req.body.id);
    res.status(200).json({token: newToken});
}