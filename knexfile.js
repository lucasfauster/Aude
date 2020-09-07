// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "aude",
      user: "postgres",
      password: "0000",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/server/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/server/database/seeds`,
    },
  },
};
