exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("images")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("images").insert([
        {
          dir: "https://p7.storage.canalblog.com/77/85/469767/26119391.jpg",
          album: "lugares",
          description: "convento",
        },
        {
          dir: "https://p7.storage.canalblog.com/77/85/469767/26119391.jpg",
          album: "lugares",
          description: "escada",
        },
        {
          dir: "https://p7.storage.canalblog.com/77/85/469767/26119391.jpg",
          album: "lugares",
          description: "parede",
        },
      ]);
    });
};
