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

export const deleteUser = async(req, res)=>{
    try {
        const id = req.params.id;
        const user = await userService.deleteUser(id);
        if(!user){
            res.status(404).json({message: "Error ao excluir usuario"});
            return;
        }
        res.status(200).json({message: "Usuario excluido com sucesso"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
}

export const updateUser = async (req, res)=>{
    try {
        const id = req.params.id;
        const user = await userService.updateUser(id, req.body);
        if(!user){
            res.status(404).json({message: "Error ao atualizar usuario"});
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
}