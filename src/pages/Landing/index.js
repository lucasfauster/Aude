import React, { useState, useEffect } from "react";
import Header from "../../components/Header/index";
import Carrossel from "../../components/Carrossel/index";
import Lista from "../../components/Lista/index";
import api from "../../services/api";
import "./style.css";

const Landing = () => {
  const [dados, setDados] = useState([]);

  const listaVideos = () => {
    try {
      const aux = api.get("videos");
      aux.then((dado) => {
        setDados(dado.data.slice(-6));
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
      <div className="corpo">
        <div className="carrossel-fotos">
          <Carrossel />
        </div>
        <div className="lista-videos">
          <h2> Últimos filmes: </h2>
          <Lista dados={dados} link="/videos" btn="Info" />
        </div>
      </div>
    </div>
  );
};
export default Landing;
