import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "./style.css";

const Carrossel = () => {
  return (
    <div className="carrossel">
      <Carousel className="carrossel-content">
        <Carousel.Item className="carrossel-item">
          <Link to="/fotos">
            <img
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
            <img
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
            <img
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
    </div>
  );
};

export default Carrossel;
