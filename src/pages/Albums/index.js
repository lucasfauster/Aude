import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Header from "../../components/Header";
import Lista from "../../components/Lista";
import "./style.css";

const Fotos = () => {
  const [dados, setDados] = useState([]);

  const listaAlbums = () => {
    try {
      const aux = api.get("albums");
      aux.then((dado) => {
        setDados(dado.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    listaAlbums();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <h2>Albums de foto:</h2>
        <Lista dados={dados} link="/fotos" btn="Ver" />
      </div>
    </div>
  );
};

export default Fotos;
