import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <Navbar bg="light" variant="light" className="header-container">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/albums">Fotos</Nav.Link>
          <Nav.Link href="/videos">Vídeos</Nav.Link>
          <Nav.Link href="/bio">Bio</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
export default Header;
