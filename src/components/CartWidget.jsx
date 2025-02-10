import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 

const Carrito = () => {
    const itemCount = 1; 

    return (
        <div className="cart-widget">
            <FaShoppingCart size={24} className="cart-icon" />
            {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
        </div>
    );
};

export default Carrito;