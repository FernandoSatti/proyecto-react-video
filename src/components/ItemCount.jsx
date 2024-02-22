
    import React from 'react'
    import {useCounter} from '../hooks/useCounter.jsx'
    export default function ItemCount() {
    const {count,increment,decrement,reset} = useCounter(1, 20, 1)

    const handleAddToCart = ()=>{
        console.log("servicio comprado")
    }
    return (
        <div>
            <div className='button-cart-container'>
                <button onClick={decrement} className='button-cart' type="button">
                    -
                </button>
                <span className='span-cart'>{count}</span>
                <button onClick={increment} className='button-cart' type="button">
                    +
                </button>
                <button onClick={reset} className='button-reset' type="button">
                    reset
                </button>
                <p className='p-button-cart'>
                    videos a editar
                </p>
            </div>
        </div>
    )
    }
