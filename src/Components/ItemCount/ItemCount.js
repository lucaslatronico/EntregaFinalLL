import './ItemCount.css'
import {useState} from 'react'
import {Button} from "react-bootstrap"



const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity> 1){
            setQuantity(quantity-1)
        }
    }

    return(
        <div className='Counter'>
            <div className='Controls'>
                <Button className='Button' onClick={decrement} variant="dark">-</Button>
                <h4 className='Number' >{quantity}</h4>
                <Button className='Button' variant="dark" onClick={increment}>+</Button>
            </div>
            <div>
                <Button className='Button' variant="dark" onClick={()=> onAdd(quantity)} disabled={!stock}>Agregar al Carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount