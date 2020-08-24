import React from 'react';

import '../css/cart.css';
import '../css/cartItem.css';

import database from '../database/data.json'


const CartItem = (props) => {
    const { item } = props;
    return(
        <div className="cart-item">
            <img src={database[item.key-1].src1} alt="CartItem" />
            <div>
                <h4>{database[item.key-1].name}</h4>
                <p className="description">{database[item.key-1].description}</p>
                <p>Size: {item.size}</p>
                <p>So luong: {item.number}</p>
            </div>
        </div>
        
    )
}

export default CartItem;