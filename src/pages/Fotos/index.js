import React, { useState } from "react";
import Header from "../../components/Header";
import Lista from "../../components/Lista";
import api from "../../services/api";
import "./style.css";

const Fotos = () => {
  const albums = api.get("albums", { params: { dir, nome, desc } });
  console.log("koe");
  console.log(albums);

  return (
    <div>
      <Header />
      <div className="container">
        <h2>Albums de foto:</h2>
        <Lista dados={albums} />
      </div>
    </div>
  );
};

export default Fotos;
