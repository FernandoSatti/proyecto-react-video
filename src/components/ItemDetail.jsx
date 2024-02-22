import React from 'react'
import {Button, Card} from 'react-bootstrap';
import Checkout from './Checkout';


export default function ItemDetail({ item }) {
  return (
    <div className='item-content'>
      
      <div className='item-video'>
        <h2 className='h2-item'>{item.title}</h2>
      <iframe width="800" height="500" src="https://www.youtube.com/embed/O3DWc2vefy8?autoplay=1" title="TRÁILER CINEMATOGRÁFICO ÉPICO Sin Copyright" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <h2>Nuestra edicion</h2>
      <p className='p-item'>{item.descriptionExtend}</p>
      </div>
      <Checkout/>
      
    </div>
  )
}