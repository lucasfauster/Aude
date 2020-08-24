import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

const Header = () => {
    return(
        <div className="header">
            <div className="header-container">
                <Link to="/fotos" className="fotos-button-container">
                    <Button variant="outline-secondary">Fotos</Button>
                </Link>
                <Link to="/videos" className="fotos-button-container">
                    <Button variant="outline-secondary">Vídeos</Button>
                </Link>
                <Link to="/bio" className="fotos-button-container">
                    <Button variant="outline-secondary">Bio</Button>
                </Link>
                
            </div>
        </div>
    );
}
export default Header;