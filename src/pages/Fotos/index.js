import React from "react";
import Header from "../../components/Header";
import Lista from "../../components/Lista";
import "./style.css";

const Fotos = () => {
  const fotos = [
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
        <h2>Albums de foto:</h2>
        <Lista dados={fotos} />
      </div>
    </div>
  );
};

export default Fotos;
