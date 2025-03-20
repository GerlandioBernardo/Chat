import { Router } from "express";
import * as userController from "../controllers/userController.js";
import { uploadFileMiddleware } from "../servers/multerService.js";

const userRoute = Router();

userRoute.get('/', userController.findAllUsers);
userRoute.delete('/:id', userController.deleteUser);
userRoute.patch('/:id',userController.updateUser);

//rota para upload de imagem
userRoute.get('/profilePicture/:id', userController.getProfilePicture);
userRoute.patch('/profilePicture/:id', uploadFileMiddleware, userController.updateProfilePicture);
userRoute.delete('/profilePicture/:id',userController.deleteProfilePicture);


export default userRoute;