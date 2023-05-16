import cart from './Assets/cart.svg'

const CartWidget = ()=>{
    return(
        <div className = "containerIcon">
            <img src={cart} alt= "cart-widget"/>
            <span className= "countProducts">0</span>
        </div>
    )
}

export default CartWidget