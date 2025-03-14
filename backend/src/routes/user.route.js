import { Router } from "express";
import * as userController from "../controllers/userController.js";
import { uploadFileMiddleware } from "../servers/multerService.js";

const userRoute = Router();

userRoute.get('/', userController.findAllUsers);
userRoute.delete('/:id', userController.deleteUser);
userRoute.patch('/:id',uploadFileMiddleware, userController.updateUser);

export default userRoute;