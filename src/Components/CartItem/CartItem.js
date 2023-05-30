import React from "react";

const CartItem = ({name, price, quantity})=>{
    return(
        <div>
            <p>Nombre: {name}</p>
            <p>Precio: ${price}</p>
            <p>Cantidad:{quantity}</p>
            <p>Subtotal: $ {price*quantity}</p>
        </div>
    )
}

export default CartItem