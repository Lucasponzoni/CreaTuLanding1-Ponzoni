import React, { useState } from 'react';
import CartWidget from './CartWidget';
import '../App.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/path/to/logo.png" alt="Company Logo" />
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a href="#Ofertas">Ofertas</a>
        <a href="#cuotas">12 Cuotas</a>
        <a href="#Sucursales">Sucursales</a>
        <a href="#Contacto">Contacto</a>
      </div>
      <div className="navbar-cart">
        <CartWidget />
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className={`navbar-toggle-icon ${isOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default NavBar;