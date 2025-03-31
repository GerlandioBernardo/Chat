import express from "express";
import * as messageService from "../servers/messageService.js";

export const getMessages = async (req,res)=>{
    try {
        const messages = await messageService.getMessages();
        if(!messages){
            res.status(404).json({message: "Error ao buscar todas as mensagens"});
            return;
        }
        res.status(200).json(messages);
    } catch (error) {
        
    }
}

export const createMessage = async (req, res)=>{
    try {
        const {userId} = req.body;
        const {text} = req.body;
        const message = await messageService.createMessage(userId, text);
        if(!message){
            res.status(404).json({message: "Error ao salva mensagem"});
            return;
        }
        res.status(201).json(message);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
}