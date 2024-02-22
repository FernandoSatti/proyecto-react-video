import React, { useState } from 'react';
import Png from '../../public/img/cart-white.png';
import { Link } from 'react-router-dom';
import Cart from './Cart';
export default function CartWidget() {

  const [cantidadEnCarrito, setCantidadEnCarrito] = useState(0); 

  return (
    <li className="nav-item cart-item">
      <Link to={"/Cart"} className="nav-link cart-link">
        <img src={Png} className='cart-white' alt="carrito de PixelEdit" />
        {cantidadEnCarrito >= 0 && (
          <span className='cart-notification'>{cantidadEnCarrito}</span>
        )}
      </Link>
    </li>
  );
}
