exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("videos")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("videos").insert([
        {
          dir:
            "https://scontent.fsdu5-1.fna.fbcdn.net/v/t1.0-9/59973504_1234278780080468_2210601821662085120_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=G_G9oiJYYv4AX95e1x0&_nc_ht=scontent.fsdu5-1.fna&oh=9787b822f8ae74647cb20a1498841c83&oe=5F7A873D",
          nome: "Indianara",
          desc:
            "Anarquista, revolucionária e puta, assim se define Indianara mulher transexual que luta por seus direitos em meio a sociedade brasileira",
          trailer: "https://vimeo.com/342765887",
          links:
            "https://mubi.com/pt/films/indianara,https://www.youtube.com/watch?v=O2boC0VoJHI&ab_channel=YouTubeMovies",
        },
        {
          dir:
            "https://scontent.fsdu5-1.fna.fbcdn.net/v/t31.0-8/14352350_297181790650099_278479954550184839_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=1MZQqGQ0xJsAX_dOJi4&_nc_ht=scontent.fsdu5-1.fna&oh=cf0016f02b1039bfcb7c104d5ad2dea0&oe=5F7AE1B9",
          nome: "Sexo Politicas e Pregações",
          desc:
            "Apesar da imagem que o Brasil carrega das mulheres bonitas e da sexualidade liberada, o País apresenta, ao mesmo tempo, um lugar onde a igualdade de gênero e a liberdade sexual ainda são questões que carecem de diálogo",
          trailer: "https://vimeo.com/187681617",
          links:
            "https://www.nowonline.com.br/filme/sexo-pregacoes-e-politica/87658",
        },
        {
          dir:
            "https://br.web.img3.acsta.net/c_215_290/pictures/15/03/11/22/01/050193.jpg",
          nome: "Rio Ano Zero",
          desc:
            "In a city where campaigns can take the appearance of a circus or a carnival, Rio Ano Zero tries to decipher the violence and absurdity of a developing country.",
          trailer: "",
          links: "https://vimeo.com/185731679",
        },
      ]);
    });
};
