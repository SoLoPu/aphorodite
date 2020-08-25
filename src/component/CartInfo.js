import React from 'react';

import '../css/cartInfo.css';

import database from '../database/data.json'


const CartInfo = (props) => {
    const { cart } = props;
    return(
       <div className="card-info">
            <h1>Thong tin don hang</h1>
            
            {
                cart.map((item)=>
                <div className="cart-info-form">
                    <div className="cross"></div>
                    <div className="cart-info-detail">   
                        <p>{database[item.key-1].name}</p>
                        <p>{database[item.key-1].price}</p>
                    </div>
                    <div className="cart-info-sub-detail">
                        <p style={{fontWeight:"bold", color:"black"}}>x {item.number}</p>
                        <p>Size {item.size}</p>
                        <p>Mau {item.color}</p>
                    </div>
                    
                    
                </div>
                )
            }

            <div className="cart-info-form">
                <div className="cross"></div>
                <div className="cart-sum">
                    <p>Tong</p>
                    <p>1230</p>
                </div>
                
            </div>
            <div className="btn-checkout-wrapper">
                <button className="cart-checkout-button">Thanh toan</button>
            </div>

            
           
       </div>
    )
}

export default CartInfo;