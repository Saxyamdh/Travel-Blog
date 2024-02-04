const express = require("express");
const Router = express.Router();
const { Register,LogIn, Verify } = require("../controllers/AuthController");
const { tryCatch } = require("../utils/trycatch");


Router.post("/register", tryCatch(Register));
Router.post("/register/verify",tryCatch(Verify))
Router.post("/login", LogIn);

module.exports = Router;
