import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Header from "../../components/Header/index";
import Lista from "../../components/Lista/index";
import "./style.css";

const Videos = () => {
  const [dadosVideos, setDadosVideos] = useState([]);

  const listaVideos = () => {
    try {
      const aux = api.get("videos");
      aux.then((dado) => {
        setDadosVideos(dado.data);
        console.log(dado.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    listaVideos();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <h2>Filmes e Docs:</h2>
        <Lista dados={dadosVideos} link="/videos" btn="Info" />
      </div>
    </div>
  );
};
export default Videos;
