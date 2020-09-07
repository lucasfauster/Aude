const knex = require("../database");

module.exports = {
  async index(req, res) {
    const results = await knex("videos");

    return res.json(results);
  },
  async sel_videos(req, res) {
    const id = req.params;

    const results = await knex("videos").where(id);

    return res.json(results);
  },
  async create(req, res, next) {
    try {
      const video = req.body;

      await knex("videos").insert(video);

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    try {
      const video = req.body;

      const id = req.params;

      await knex("videos").update(video).where(id);

      return res.send();
    } catch (error) {
      next(error);
    }
  },
  async delete(req, res, next) {
    try {
      const video = req.body;

      const id = req.params;

      await knex("videos").delete(video).where(id);

      return res.send();
    } catch (error) {
      next(error);
    }
  },
};
