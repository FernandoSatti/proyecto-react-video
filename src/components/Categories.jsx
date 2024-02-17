import React from 'react'
import { Link } from 'react-router-dom'
export default function Categories() {
  return (
<div className='nav-secondary'>
    <ul className='ul-secondary'>
    <h2>Selecciona nuestras categorias</h2>
    <Link to ={"/category/humor y creatividad"}><li>Humor y Creatividad</li></Link>
    <Link to ={"/category/experiencia personal"}><li>Experiencia Personal</li></Link>
    <Link to ={"/category/publicitario"}><li>Publicitario</li></Link>
    <Link to ={"/category/transmisiones"}><li>Transmisiones</li></Link>
    <Link to ={"/"}><li>todo</li></Link>
    </ul>
</div>

  )
}
