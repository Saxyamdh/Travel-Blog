const express = require("express");
const morgan = require("morgan");
http = require("http");
const cors = require("cors");
const dotenv = require("dotenv");
const registerRoute = require("./routes/AUthRoute");
const bodyParser = require('body-parser');


const app = express();
dotenv.config({ path: "config.env" });

//cors
app.use(
  cors({
    origin: process.env.ORIGIN,
    methods: process.env.METHODS,
    credentials: true,
  })
);
app.use(bodyParser.json());

//routes
app.use("/", registerRoute);

module.exports = app;
