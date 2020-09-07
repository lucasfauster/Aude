exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("images")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("images").insert([
        {
          original:
            "https://p7.storage.canalblog.com/77/85/469767/26119391.jpg",
          thumbnail: "",
          albums_id: 2,
        },
        {
          original:
            "https://p1.storage.canalblog.com/17/87/469767/26119427.jpg",
          thumbnail: "",
          albums_id: 2,
        },
        {
          original:
            "https://p7.storage.canalblog.com/75/01/469767/26133853.jpg",
          thumbnail: "",
          albums_id: 1,
        },
      ]);
    });
};
