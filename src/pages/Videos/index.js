import React from "react";
import Header from "../../components/Header/index";
import Lista from "../../components/Lista/index";
import "./style.css";

const Videos = () => {
  const videos = [
    {
      titulo: "Ocupações",
      img: "https://p7.storage.canalblog.com/75/01/469767/26133853.jpg",
      desc: "Fotos sobre ocupações em Niterói-RJ",
    },
    {
      titulo: "Ocupações",
      img: "https://p7.storage.canalblog.com/75/01/469767/26133853.jpg",
      desc: "Fotos sobre ocupações em Niterói-RJ",
    },
    {
      titulo: "Ocupações",
      img: "https://p7.storage.canalblog.com/75/01/469767/26133853.jpg",
      desc: "Fotos sobre ocupações em Niterói-RJ",
    },
    {
      titulo: "Ocupações",
      img: "https://p7.storage.canalblog.com/75/01/469767/26133853.jpg",
      desc: "Fotos sobre ocupações em Niterói-RJ",
    },
    {
      titulo: "Ocupações",
      img: "https://p7.storage.canalblog.com/75/01/469767/26133853.jpg",
      desc: "Fotos sobre ocupações em Niterói-RJ",
    },
    {
      titulo: "Ocupações",
      img: "https://p7.storage.canalblog.com/75/01/469767/26133853.jpg",
      desc: "Fotos sobre ocupações em Niterói-RJ",
    },
    {
      titulo: "Ocupações",
      img: "https://p7.storage.canalblog.com/75/01/469767/26133853.jpg",
      desc: "Fotos sobre ocupações em Niterói-RJ",
    },
    {
      titulo: "Ocupações",
      img: "https://p7.storage.canalblog.com/75/01/469767/26133853.jpg",
      desc: "Fotos sobre ocupações em Niterói-RJ",
    },
  ];

  return (
    <div>
      <Header />
      <div className="container">
        <h2>Filmes e Docs:</h2>
        <Lista dados={videos} />
      </div>
    </div>
  );
};
export default Videos;
