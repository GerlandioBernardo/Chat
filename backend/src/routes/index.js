import {Router} from "express";
import userRoute from "./user.route.js";
import authRoute from "./auth.route.js";


const rootRoute = Router();

rootRoute.use('/user', userRoute);
rootRoute.use('/auth', authRoute);


export default rootRoute;