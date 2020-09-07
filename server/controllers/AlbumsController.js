const knex = require("../database");

module.exports = {
  async index(req, res) {
    const results = await knex("albums");

    return res.json(results);
  },
  async sel_album(req, res) {
    const id = req.params;
    const results = await knex("albums").where(id);

    return res.json(results);
  },
  async create(req, res, next) {
    try {
      const album = req.body;

      await knex("albums").insert(album);

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    try {
      const album = req.body;

      const id = req.params;

      await knex("albums").update(album).where(id);

      return res.send();
    } catch (error) {
      next(error);
    }
  },
  async delete(req, res, next) {
    try {
      const album = req.body;

      const id = req.params;

      await knex("albums").delete(album).where(id);

      return res.send();
    } catch (error) {
      next(error);
    }
  },
};
