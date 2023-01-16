import { Router } from "express";
import { addOrganisme } from "../controllers/OrganismeController";
const route = Router();

route.post("/addorganisme", addOrganisme);
