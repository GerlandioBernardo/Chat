import { Router } from "express";
import * as userController from "../controllers/userController.js";
import { uploadFileMiddleware } from "../servers/multerService.js";

const route = Router();

route.get('/user', userController.findAllUsers);
route.post('/user',uploadFileMiddleware, userController.createUser);

export default route;