import React, { useState } from 'react';
import Svg from '../img/video-cart.svg';
export default function CartWidget() {
  // Estado para la cantidad de elementos en el carrito
  const [cantidadEnCarrito, setCantidadEnCarrito] = useState(1); 

  return (
    <button className='button-cart'>
      <a href="#" className='a-video-cart'>
        <img src={Svg} className='video-cart' alt="carrito de videos" />
        {cantidadEnCarrito > 0 && (
          <span className='cart-notification'>{cantidadEnCarrito}</span>
        )}
      </a>
    </button>
  );
}
