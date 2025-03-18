import express from "express";
import { UserSchema } from "../schemas/user.schema.js";


export const validarCampos = async (req, res, next)=>{
    const result = UserSchema.safeParse(req.body);

    if(!result.success){
        res.status(400).json({errors: result.error.format()})
        return;
    }
    next()
}


