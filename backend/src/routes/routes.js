import { Router } from "express";
import * as userController from "../controllers/userController.js";

const route = Router();

route.get('/user', userController.findAllUsers);
route.post('/user', userController.createUser);

export default route;