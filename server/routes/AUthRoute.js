const express = require("express");
const Router = express.Router();
const { Register,LogIn } = require("../controllers/AuthController");

Router.post("/register", Register);
Router.post("/login", LogIn);

module.exports = Router;
