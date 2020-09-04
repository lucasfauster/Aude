const knex = require("../database");

module.exports = {
  async index(req, res) {
    const results = await knex("images");

    return res.json(results);
  },
  async create(req, res, next) {
    try {
      const image = req.body;

      await knex("images").insert(image);

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    try {
      const image = req.body;

      const id = req.params;

      await knex("images").update(image).where(id);

      return res.send();
    } catch (error) {
      next(error);
    }
  },
  async delete(req, res, next) {
    try {
      const image = req.body;

      const id = req.params;

      await knex("images").delete(image).where(id);

      return res.send();
    } catch (error) {
      next(error);
    }
  },
};
