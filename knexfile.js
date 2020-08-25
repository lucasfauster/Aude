// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'knex_test',
      user: 'postgres',
      password: '0000'

    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/server/database/migrations`
    }
  }
};