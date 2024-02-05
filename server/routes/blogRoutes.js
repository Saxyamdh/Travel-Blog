const express = require("express");
const requireAuth = require("../middleware/validation/checkAuth");
const { tryCatch } = require("../utils/trycatch");
const { blogPost } = require("../controllers/blogController");
const Router = express.Router();

Router.use(tryCatch(requireAuth));
Router.get("/", tryCatch(blogPost));
module.exports = Router;
