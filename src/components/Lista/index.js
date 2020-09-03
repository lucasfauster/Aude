import React from "react";
import { Card, Button, CardColumns } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const VideoLanc = (props) => {
  const dados = props.dados;

  return (
    <CardColumns className="lista">
      {dados.map((conteudo) => {
        return (
          <Card className="conteudo">
            <Card.Img variant="top" className="img" src={conteudo.img} />
            <Card.Body>
              <Card.Title>{conteudo.titulo}</Card.Title>
              <Card.Text>{conteudo.desc}</Card.Text>
              <Link to="/videos">
                <Button>Infos</Button>
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </CardColumns>
  );
};

export default VideoLanc;
