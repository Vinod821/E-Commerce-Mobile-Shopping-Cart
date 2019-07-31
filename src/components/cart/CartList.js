import { CartItem } from "./CartItem";
import React from 'react';

export function CartList({value}){

    const {cart}= value;
    return (
        <div className="container-fluid">
           
        {cart.map(item=>{
            return <CartItem key={item.id} item={item} value={value} />
        })}
            </div>
    )
}

export default CartList