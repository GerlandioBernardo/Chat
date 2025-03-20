import {Router} from "express";
import * as authController from "../controllers/authController.js";
import {uploadFileMiddleware} from "../servers/multerService.js";
import { validarCampos} from "../middleware/validateFields.js";

const authRoute = Router();

authRoute.post('/signup',validarCampos, authController.signup);
authRoute.post('/login', authController.login);

export default authRoute;