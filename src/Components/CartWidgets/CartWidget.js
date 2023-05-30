import cart from './Assets/cart.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import {Link} from 'react-router-dom'

const CartWidget = ()=>{
    const {totalQuantity} = useContext(CartContext)

    return(
        <Link to='/cart' className = "containerIcon" >  
            <img src={cart} alt= "cart-widget"/>
            {/* <span className= "countProducts">0</span> */}
            { totalQuantity}
        </Link>
    )
}

export default CartWidget