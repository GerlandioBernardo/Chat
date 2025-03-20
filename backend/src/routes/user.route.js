import { Router } from "express";
import * as userController from "../controllers/userController.js";
import { uploadFileMiddleware } from "../servers/multerService.js";
import { authMiddleware } from "../middleware/auth.js";

const userRoute = Router();

userRoute.get('/', userController.findAllUsers);
userRoute.delete('/',authMiddleware, userController.deleteUser);
userRoute.patch('/',authMiddleware, userController.updateUser);

//rotas para upload de imagem
userRoute.get('/profilePicture/', authMiddleware,userController.getProfilePicture);
userRoute.patch('/profilePicture/', authMiddleware, uploadFileMiddleware, userController.updateProfilePicture);
userRoute.delete('/profilePicture/',authMiddleware, userController.deleteProfilePicture);


export default userRoute;