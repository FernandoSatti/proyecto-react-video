import React, { useState } from 'react';
import Png from '../../public/img/cart-white.png';
export default function CartWidget() {

  const [cantidadEnCarrito, setCantidadEnCarrito] = useState(0); 

  return (
    <li className="nav-item cart-item">
      <a href="#link" className="nav-link cart-link">
        <img src={Png} className='cart-white' alt="carrito de PixelEdit" />
        {cantidadEnCarrito >= 0 && (
          <span className='cart-notification'>{cantidadEnCarrito}</span>
        )}
      </a>
    </li>
  );
}
