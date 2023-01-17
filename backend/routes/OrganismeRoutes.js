import { Router } from "express";
import {
  addOrganisme,
  getAllOrganismes,
} from "../controllers/OrganismeController.js";
import { verifyAccesToken } from "../middlewares/Token/verifyToken.js";

const route = Router();

route.post("/addorganisme", addOrganisme);
route.get("/organismes", getAllOrganismes);
export default route;
