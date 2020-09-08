import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import api from "../../services/api";
import "./style.css";

const Carrossel = () => {
  const [dados, setDados] = useState([]);

  const listaAlbums = () => {
    try {
      const aux = api.get("albums");
      aux.then((dado) => {
        setDados(dado.data.slice(-3).reverse());
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    listaAlbums();
  }, []);
  return (
    <Carousel className="carrossel-content">
      {dados.map((album) => {
        return (
          <Carousel.Item className="carrossel-item" key={album.id}>
            <Link to={`/fotos/${album.id}`}>
              <Image
                className="carrossel-img"
                src={album.dir}
                alt="First slide"
              />
            </Link>
            <Carousel.Caption>
              <h3>{album.nome}</h3>
              <p>{album.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Carrossel;
