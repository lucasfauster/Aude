import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import "./style.css";

const Carrossel = () => {
  return (
    <Carousel className="carrossel-content">
      <Carousel.Item className="carrossel-item">
        <Link to="/fotos">
          <Image
            className="carrossel-img"
            src="https://p1.storage.canalblog.com/17/87/469767/26119427.jpg"
            alt="First slide"
          />
        </Link>
        <Carousel.Caption>
          <h3>Album lugares</h3>
          <p>Lugar</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carrossel-item">
        <Link to="/fotos">
          <Image
            className="carrossel-img"
            src="https://p7.storage.canalblog.com/77/85/469767/26119391.jpg"
            alt="First slide"
          />
        </Link>
        <Carousel.Caption>
          <h3>Album lugares</h3>
          <p>Lugar</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carrossel-item">
        <Link to="/fotos">
          <Image
            className="carrossel-img"
            src="https://p7.storage.canalblog.com/77/85/469767/26119391.jpg"
            alt="First slide"
          />
        </Link>
        <Carousel.Caption>
          <h3>Album lugares</h3>
          <p>Lugar</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrossel;
