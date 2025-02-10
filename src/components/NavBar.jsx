import React from 'react';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';

const NavBar = () => {
    return (
        <nav className="barra-navegacion navbar navbar-expand-lg navbar-light fija-arriba">
            <div className="contenedor-fluido container-fluid">
                <a className="marca-navegacion navbar-brand" href="#">Mi Tienda</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navegacion navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="enlace-navegacion nav-link" href="#">Inicio</a></li>
                        <li className="nav-item"><a className="enlace-navegacion nav-link" href="#">Productos</a></li>
                        <li className="nav-item"><a className="enlace-navegacion nav-link" href="#">Contacto</a></li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;