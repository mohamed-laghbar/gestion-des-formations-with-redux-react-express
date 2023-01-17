import { Router } from "express";
import { getAllFormation ,addFormation } from "../controllers/FormationController.js";

import { verifyAccesToken } from "../middlewares/Token/verifyToken.js";

const route = Router();

route.post("/addformation",verifyAccesToken, addFormation);
route.get("/formations", verifyAccesToken, getAllFormation);
export default route;
