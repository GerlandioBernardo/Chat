import {Router} from "express";
import * as authController from "../controllers/authController.js";
import {uploadFileMiddleware} from "../servers/multerService.js";

const authRoute = Router();

authRoute.post('/signup',uploadFileMiddleware, authController.signup)
authRoute.post('/login', authController.login);

export default authRoute;