import express from "express";
import * as userService from "../servers/userService.js";

export const createUser = async (req, res)=>{
    try {
        const dados = req.body;
        const user = await userService.createUser(dados);
        res.status(201).json(user);

        
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Erro ao tentar criar usuario"})
    }
}