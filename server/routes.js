const express = require("express");
const routes = express.Router();

const ImagesController = require("./controllers/ImagesController");
const AlbumsController = require("./controllers/AlbumsController");
const VideosController = require("./controllers/VideosController");

routes
  // Images
  .get("/images", ImagesController.index)
  .get("/images/:albums_id", ImagesController.sel_album)
  .post("/images", ImagesController.create)
  .put("/images/:id", ImagesController.update)
  .delete("/images/:id", ImagesController.delete)
  // Albums
  .get("/albums", AlbumsController.index)
  .get("/albums/:id", AlbumsController.sel_album)
  .post("/albums", AlbumsController.create)
  .put("/albums/:id", AlbumsController.update)
  .delete("/albums/:id", AlbumsController.delete)
  //Videos
  .get("/videos", VideosController.index)
  .get("/videos/:id", VideosController.sel_videos)
  .post("/videos", VideosController.create)
  .put("/videos/:id", VideosController.update)
  .delete("/videos/:id", VideosController.delete);

module.exports = routes;
