import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
export default function ItemDetailsContainer() {
    const [item, SetItem] = useState([])
    const { pid } = useParams()
    useEffect(() => {
        fetch('../data/services.json')
            .then(response => response.json())
            .then(productos => {
                
                const prod = productos.find(producto => producto.id == pid)
                if (prod) {
                    SetItem(prod)
                }
            })
    },[pid])

    return (
        <div >
             <ItemDetail item={item} />
             
        </div>
    )
}