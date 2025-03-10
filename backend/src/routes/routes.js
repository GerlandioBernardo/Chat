import { Router } from "express";
import * as userController from "../controllers/userController.js";
import { uploadFileMiddleware } from "../servers/multerService.js";

const route = Router();

route.get('/', userController.findAllUsers);
route.post('/',uploadFileMiddleware, userController.createUser);
route.delete('/:id', userController.deleteUser);

export default route;