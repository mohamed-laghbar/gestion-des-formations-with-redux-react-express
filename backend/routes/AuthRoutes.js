import { Router } from "express";
const route = Router();
import { login, privateRoute } from "../controllers/AuthController.js";
import { verifyAccesToken } from "../middlewares/verifyToken.js";

route.post("/login", login);
route.get("/private", verifyAccesToken, privateRoute);

export default route;
