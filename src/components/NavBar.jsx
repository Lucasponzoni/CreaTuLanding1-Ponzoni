import React, { useState } from 'react';
import { FaFire } from 'react-icons/fa';
import Carrito from './CartWidget';
import '../App.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={reloadPage} style={{ cursor: 'pointer' }}>
        <img src="./img/logo.png" alt="Company Logo" />
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a href="#Ofertas">
          Ofertas <FaFire style={{ color: 'red', marginLeft: '5px', fontSize: '25px' }} />
        </a>
        <a href="#cuotas">12 Cuotas</a>
        <a href="#Sucursales">Sucursales</a>
        <a href="#Contacto">Contacto</a>
      </div>
      <div className="navbar-cart">
        <Carrito />
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className={`navbar-toggle-icon ${isOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default NavBar;