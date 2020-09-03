const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");

routes.get("/images", UserController.index);
routes.post("/images", UserController.create);

modules.exports = routes;
