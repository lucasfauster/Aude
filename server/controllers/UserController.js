const knex = require("../database");

module.exports = {
  async index(req, res) {
    const results = await knex("images");

    return res.json(results);
  },
};
