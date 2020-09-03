const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");

routes.get("/images", UserController.index);

modules.exports = routes;
