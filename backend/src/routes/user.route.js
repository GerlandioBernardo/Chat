import { Router } from "express";
import * as userController from "../controllers/userController.js";
import * as messageController from "../controllers/messageController.js";
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

//rotas para mensagens enviadas pelo usuario
userRoute.post('/message',authMiddleware, messageController.createMessage);



export default userRoute;