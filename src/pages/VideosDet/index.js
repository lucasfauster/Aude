import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
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
          <p>{dadosVideos.map((video) => video.desc)}</p>
          {dadosVideos.map((video) => {
            if (video.trailer !== "") {
              return (
                <div className="player-wrapper">
                  <h3>Trailer:</h3>
                  <ReactPlayer
                    className="react-player"
                    url={video.trailer}
                    light={true}
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                    playing
                    controls
                  />
                </div>
              );
            }
          })}
          {dadosVideos.map((video) => (
            <div key="0" className="link">
              <h3>Assista:</h3>
              {video.links.split(",").map((link, index) => (
                <p>
                  <a key={index} href={link} target="_blank">
                    {link}
                  </a>
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideosDet;
