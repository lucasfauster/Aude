
exports.up = knex => 
    knex.schema.createTable('images', table => {
      table.increments('id')
      table.text('album')
      table.text('description')
    })

exports.down = (knex) => knex.schema.dropTable('images')

