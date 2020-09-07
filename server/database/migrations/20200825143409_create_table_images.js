exports.up = (knex) => {
  return knex.schema.createTable("images", (table) => {
    table.increments("id");
    table.text("original");
    table.text("thumbnail");
    table
      .integer("albums_id")
      .references("albums.id")
      .notNullable()
      .onDelete("CASCADE");
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("images");
};
