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
          <Card className="conteudo" key={conteudo.id}>
            <Card.Img variant="top" className="img" src={conteudo.dir} />
            <Card.Body>
              <Card.Title>{conteudo.nome}</Card.Title>
              <Card.Text className="txt">{conteudo.desc}</Card.Text>
              <Link to={`${props.link}/${conteudo.id}`}>
                <Button>{props.btn}</Button>
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </CardColumns>
  );
};

export default VideoLanc;
