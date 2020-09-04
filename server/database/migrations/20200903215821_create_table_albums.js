exports.up = (knex) => {
  return knex.schema.createTable("albums", (table) => {
    table.increments("id");
    table.text("dir");
    table.text("nome");
    table.text("desc");
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("albums");
};
