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

export const getProfilePicture = async(req, res)=>{
    try {
        const id = req.params.id;
        const urlProfilePicture = await userService.getProfilePicture(id);
        if(!urlProfilePicture){
            res.status(404).json({message: "Error ao buscar imagem de usuário"});
            return
        }
        res.status(200).json(urlProfilePicture);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
}
export const updateProfilePicture = async (req, res)=>{
    try {
        const id = req.params.id;
        const {profilePicture} = req.body;
        const user = await userService.updateProfilePicture(id, profilePicture);
        if(!user){
            res.status(404).json({message: "Error ao atualizar foto de perfil"});
            return
        }
        res.status(200).json(user)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
}

export const deleteProfilePicture = async (req, res)=>{
    try {
        const id = req.params.id;
        const profilePictureDefault = process.env.PROFILEPICTUREDEFAULT;
        const user = await userService.deleteProfilePicture(id, profilePictureDefault);
        if(!user){
            res.status(404).json({message: "Error ao excluir foto de perfil"});
            return
        }
        res.status(200).json({message: "Foto do perfil excluida com sucesso"});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
}