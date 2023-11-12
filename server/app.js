const express = require("express");
const morgan = require("morgan");
http = require("http");
const cors = require("cors");
const dotenv = require("dotenv");
const registerRoute = require("./routes/AUthRoute");
const bodyParser = require("body-parser");

const app = express();
dotenv.config({ path: "config.env" });
app.options("*", cors());
app.use(morgan("combined"));

app.use(
  cors({
    origin: process.env.ORIGIN,
    methods: process.env.METHODS,
    credentials: true,
    allowedHeaders: ["X-Requested-With", "content-type"],
  })
);

app.use(bodyParser.json());

//cors

//routes
app.use("/", registerRoute);

module.exports = app;
