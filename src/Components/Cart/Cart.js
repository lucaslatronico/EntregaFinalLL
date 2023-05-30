import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0){
        return(
            <div>
                <h1>No hay Items en el Carrito</h1>
                <Link to= '/' className='Option'>Productos</Link>
            </div>
        )
    }

    return(
        <div>
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <Button variant="secondary" onClick= {()=> clearCart()} className='Button'>Limpiar Carrito</Button>
            <Button variant="secondary" to='/checkout' className='Option'>Checkout</Button>
        </div>
    )
}

export default Cart