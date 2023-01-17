import express from "express";
import ErrorHandler from "./middlewares/Error/ErrorHandler.js";
const app = express();
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";

import "./config/db.js";
import './config/initAdmin.js'
import authRoute from "./routes/AuthRoutes.js";
import OrganismeRoute from './routes/OrganismeRoutes.js'
import FormationRoute from './routes/FormationRoutes.js'

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());


app.use("/api/auth", authRoute);
app.use("/api", OrganismeRoute);
app.use("/api", FormationRoute);

app.use(ErrorHandler);

const port = process.env.PORT || 5000;

app.listen(port);
console.log(`Running on Port ${port}`);
