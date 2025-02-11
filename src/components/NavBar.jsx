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
        <img src="https://firebasestorage.googleapis.com/v0/b/despachos-meli-novogar.appspot.com/o/Novogar%2FNovogar-logo.png?alt=media&token=9f534184-2944-4b2c-a4be-6e763ee59bc1" alt="ElectroGar" />
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