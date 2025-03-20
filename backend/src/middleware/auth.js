import express from "express";
import dotenv from "dotenv";
import jwt, {JwtPayload} from "jsonwebtoken";

dotenv.config();

export  const authMiddleware = async (req, res, next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader){
        res.status(401).json({message: "Token não fornecido"});
        return;
    }
    const [, token] = authHeader.splite(" ");
    jwt.verify(token, process.env.CHAVE_SECRETA, (error, decoded)=>{
        if(error){
            res.status(401).json({message: "Token Inválido"});
            return;
        }
        
        req.body.id = decoded.id;
        next();
    })
}