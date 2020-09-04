exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("images")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("images").insert([
        {
          dir: "https://p7.storage.canalblog.com/77/85/469767/26119391.jpg",
          albums_id: 2,
        },
        {
          dir: "https://p1.storage.canalblog.com/17/87/469767/26119427.jpg",
          albums_id: 2,
        },
      ]);
    });
};
