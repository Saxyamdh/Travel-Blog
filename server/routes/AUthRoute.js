const express = require("express");
const Router = express.Router();
const { Register } = require("../controllers/AuthController");

Router.post("/register", Register);

module.exports = Router;
