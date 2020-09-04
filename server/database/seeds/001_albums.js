exports.seed = (knex) =>
  // Deletes ALL existing entries
  knex("albums")
    .del()
    .then(() =>
      // Inserts seed entries
      knex("albums").insert([
        {
          dir: "https://p7.storage.canalblog.com/75/01/469767/26133853.jpg",
          nome: "Ocupações",
          desc: "Fotos sobre ocupações em Niterói-RJ",
        },
        {
          dir: "https://p1.storage.canalblog.com/17/87/469767/26119427.jpg",
          nome: "Lugares",
          desc: "Lugares e ambientes antigos",
        },
      ])
    );
