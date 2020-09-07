import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import ImageGallery from "react-image-gallery";
import api from "../../services/api";
import "./style.css";

const Fotos = (props) => {
  const [dadosFotos, setDadosFotos] = useState([]);
  const [dadosAlbums, setDadosAlbums] = useState([]);

  const listaFotos = () => {
    try {
      const aux = api.get(`images/${props.match.params.albums_id}`);
      aux.then((dado) => {
        setDadosFotos(dado.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const listaAlbums = () => {
    try {
      const aux = api.get(`albums/${props.match.params.albums_id}`);
      aux.then((dado) => {
        setDadosAlbums(dado.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    listaFotos();
    listaAlbums();
  }, []);

  return (
    <div>
      <Header />
      <div className="corpo">
        <ImageGallery items={dadosFotos} srcSet="dir" />
        <div className="texto">
          <h2>{dadosAlbums.map((album) => album.nome)}</h2>
          <p>{dadosAlbums.map((album) => album.desc)}</p>
        </div>
      </div>
    </div>
  );
};

export default Fotos;
