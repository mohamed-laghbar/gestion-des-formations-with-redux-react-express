import express from 'express';
import ErrorHandler from './middlewares/ErrorHandler.js'

const app = express();
// require("dotenv").config();
import 'dotenv/config'



import './config/db.js'
// import './config//initAdmin.js'
import authRoute from  './routes/AuthRoutes.js'
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use("/api/auth",authRoute );



app.use(ErrorHandler)

const port = process.env.PORT || 5000;

app.listen(port);
console.log(`Running on Port ${port}`);

