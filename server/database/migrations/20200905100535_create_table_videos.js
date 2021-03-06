exports.up = function (knex) {
  return knex.schema.createTable("videos", (table) => {
    table.increments("id");
    table.text("dir");
    table.text("nome");
    table.text("desc");
    table.text("trailer");
    table.text("links");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("videos");
};
