import React from "react";
import Header from "../../components/Header/index";
import Carrossel from "../../components/Carrossel/index";
import Lista from "../../components/Lista/index";
import "./style.css";

const Landing = () => {
  const videos = [
    {
      titulo: "Indianara",
      img:
        "https://scontent.fsdu5-1.fna.fbcdn.net/v/t1.0-9/59973504_1234278780080468_2210601821662085120_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=lxIKMNsIN6cAX83-TA7&_nc_ht=scontent.fsdu5-1.fna&oh=6395d3fd499e1737d5ead9a7af656f03&oe=5F7692BD",
      desc:
        "Anarquista, revolucionária e puta, assim se define Indianara mulher transexual que luta por seus direitos em meio a sociedade brasileira",
    },
    {
      titulo: "Indianara",
      img:
        "https://scontent.fsdu5-1.fna.fbcdn.net/v/t1.0-9/59973504_1234278780080468_2210601821662085120_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=lxIKMNsIN6cAX83-TA7&_nc_ht=scontent.fsdu5-1.fna&oh=6395d3fd499e1737d5ead9a7af656f03&oe=5F7692BD",
      desc:
        "Anarquista, revolucionária e puta, assim se define Indianara mulher transexual que luta por seus direitos em meio a sociedade brasileira",
    },
    {
      titulo: "Indianara",
      img:
        "https://scontent.fsdu5-1.fna.fbcdn.net/v/t1.0-9/59973504_1234278780080468_2210601821662085120_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=lxIKMNsIN6cAX83-TA7&_nc_ht=scontent.fsdu5-1.fna&oh=6395d3fd499e1737d5ead9a7af656f03&oe=5F7692BD",
      desc:
        "Anarquista, revolucionária e puta, assim se define Indianara mulher transexual que luta por seus direitos em meio a sociedade brasileira",
    },
    {
      titulo: "Indianara",
      img:
        "https://scontent.fsdu5-1.fna.fbcdn.net/v/t1.0-9/59973504_1234278780080468_2210601821662085120_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=lxIKMNsIN6cAX83-TA7&_nc_ht=scontent.fsdu5-1.fna&oh=6395d3fd499e1737d5ead9a7af656f03&oe=5F7692BD",
      desc:
        "Anarquista, revolucionária e puta, assim se define Indianara mulher transexual que luta por seus direitos em meio a sociedade brasileira",
    },
    {
      titulo: "Indianara",
      img:
        "https://scontent.fsdu5-1.fna.fbcdn.net/v/t1.0-9/59973504_1234278780080468_2210601821662085120_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=lxIKMNsIN6cAX83-TA7&_nc_ht=scontent.fsdu5-1.fna&oh=6395d3fd499e1737d5ead9a7af656f03&oe=5F7692BD",
      desc:
        "Anarquista, revolucionária e puta, assim se define Indianara mulher transexual que luta por seus direitos em meio a sociedade brasileira",
    },
  ];

  return (
    <div>
      <Header />
      <div className="corpo">
        <div className="carrossel-fotos">
          <Carrossel />
        </div>
        <div className="lista-videos">
          <h2> Lançamentos: </h2>
          <Lista dados={videos} />
        </div>
      </div>
    </div>
  );
};
export default Landing;
