import { Router } from "express";
import { addOrganisme, getAllOrganismes } from "../controllers/OrganismeController.js";
const route = Router();

route.post("/addorganisme", addOrganisme);
route.get("/organismes",getAllOrganismes);
export default route;
