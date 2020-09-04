const express = require("express");
const routes = express.Router();

const ImagesController = require("./controllers/ImagesController");
const AlbumsController = require("./controllers/AlbumsController");

routes
  // Images
  .get("/images", ImagesController.index)
  .post("/images", ImagesController.create)
  .put("/images/:id", ImagesController.update)
  .delete("/images/:id", ImagesController.delete)
  // Albums
  .get("/albums", AlbumsController.index)
  .post("/albums", AlbumsController.create)
  .put("/albums/:id", AlbumsController.update)
  .delete("/albums/:id", AlbumsController.delete);

module.exports = routes;
