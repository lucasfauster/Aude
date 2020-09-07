import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import Header from "../../components/Header";
import api from "../../services/api";
import "./style.css";

const VideosDet = (props) => {
  const [dadosVideos, setDadosVideos] = useState([]);

  const listaVideos = () => {
    try {
      const aux = api.get(`videos/${props.match.params.id}`);
      aux.then((dado) => {
        setDadosVideos(dado.data);
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
        <Image src={dadosVideos.map((video) => video.dir)} />
        <div className="texto">
          <h2>{dadosVideos.map((video) => video.nome)}</h2>
          <t>{dadosVideos.map((video) => video.desc)}</t>
        </div>
      </div>
    </div>
  );
};

export default VideosDet;
