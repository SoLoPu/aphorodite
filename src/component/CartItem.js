import React from 'react';

import '../css/cart.css';
import '../css/cartItem.css';


import { TiDelete } from 'react-icons/ti';

import  { connect } from 'react-redux';
import * as actions from '../actions'

import database from '../database/data.json'


const CartItem = (props) => {
    const { item } = props;
    return(
        <div className="cart-item">
            <img src={database[item.key-1].src1} alt="CartItem" />
            <div>
                <div className="cart-item-title">
                    <h4>{database[item.key-1].name}</h4>
                    <button onClick={() => props.cartDelete(item)}>
                        <TiDelete style={{width:"25px", height:"25px"}}/>
                    </button>
                </div>
                
                <p className="cart-item-description">{database[item.key-1].description}</p>
                <div className="cart-last-part">
                    <p className="cart-item-size">Size: {item.size}</p>
                    <div className="cart-item-number">
                        <p>Số lượng:</p>
                        <button onClick={() => props.cartDecrease(item.key)}>-</button>
                        <p>{item.number}</p>
                        <button onClick={() => props.cartIncrease(item.key)}>+</button>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps, null)(CartItem);