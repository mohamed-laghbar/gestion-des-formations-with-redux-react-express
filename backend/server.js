const express = require("express");

const app = express();
require("dotenv").config();
require("./config/db");
require('./config/initAdmin')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", require("./routes/AuthRoutes"));

const port = process.env.PORT || 5000;

app.listen(port);
console.log(`Running on Port ${port}`);

module.exports = app;
