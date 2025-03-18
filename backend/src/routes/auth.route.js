import {Router} from "express";
import * as authController from "../controllers/authController.js";
import {uploadFileMiddleware} from "../servers/multerService.js";
import { validarCampos } from "../middleware/validarCampos.js";

const authRoute = Router();

authRoute.post('/signup',uploadFileMiddleware,validarCampos, authController.signup)
authRoute.post('/login', authController.login);

export default authRoute;