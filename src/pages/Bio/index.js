import React from "react";
import { Image } from "react-bootstrap";
import Header from "../../components/Header/index";
import "./style.css";

const Bio = () => {
  return (
    <div>
      <Header />
      <div className="corpo">
        <Image src="https://images.midilibre.fr/api/v1/images/view/5ddd3bcad286c26be0111514/large/image.jpg?v=3" />
        <h2>Aude Chevalier-Beaumel</h2>
        <p> Gata mais linda do meu coração </p>
      </div>
    </div>
  );
};
export default Bio;
