import React from "react";
import Header from "../../components/Header/index";
import Carrossel from "../../components/Carrossel/index";
import "./style.css";

const Landing = () => {
  return (
    <div>
      <Header />
      <div className="corpo">
        <div className="carrossel-fotos">
          <Carrossel />
        </div>
        <div className="lista-videos">
          <h2></h2>
        </div>
      </div>
    </div>
  );
};
export default Landing;
