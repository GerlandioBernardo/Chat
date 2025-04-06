import {Router} from "express";
import * as authController from "../controllers/authController.js";
import { validarCampos} from "../middleware/validateFields.js";

const authRoute = Router();

authRoute.post('/signup',validarCampos, authController.signup);
authRoute.post('/login', authController.login);
authRoute.get('/reflesh',authController.refleshToken);

export default authRoute;