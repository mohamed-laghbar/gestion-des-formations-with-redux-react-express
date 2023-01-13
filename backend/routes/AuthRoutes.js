import { Router } from "express";
const route = Router();
import { login, privateRoute,forgetPassword,resetPassword } from "../controllers/AuthController.js";
import {verifyAccesToken} from "../middlewares/Token/verifyToken.js";




route.post("/login", login);
route.get("/private",verifyAccesToken, privateRoute);
route.post('/forgetpassword',forgetPassword)
route.post('/resetpassword/:token',resetPassword)

export default route;
