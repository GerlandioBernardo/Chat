import express from "express";
import * as userService from "../servers/userService.js";

export const findAllUsers = async (req, res)=>{
    try {
        const users = await userService.findAllUsers();
        res.status(200).json(users);
        
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Erro ao tentar buscar todos os usuarios"})
        
    }
}

export const createUser = async (req, res)=>{
    try {
        const dados = req.body;
        const newUser = await userService.createUser(dados);
        res.status(201).json(newUser);
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Erro ao tentar criar usuario"})
    }
}