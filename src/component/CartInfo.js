import React from 'react';

import { connect } from 'react-redux';

import '../css/cartInfo.css';

import database from '../database/data.json'

import { Link } from "react-router-dom";


const CartInfo = (props) => {
    const { cart, total } = props;
    return(
       <div className="card-info">
            <h1>Thông tin đơn hàng</h1>
            {
                cart.map((item)=>
                <div>
                    <div className="cross"></div>
                    <div className="cart-info-form" key={item.key}>
                        <div>   
                            <p className="cart-info-detail">{database[item.key-1].name}</p>
                            <p style={{fontWeight:"bold", color:"black"}}>x {item.number}</p>
                            <p>Size {item.size}</p>
                            <p>Mau {item.color}</p>
                        </div>
                        <div className="cart-info-sub-detail">
                            <p>${database[item.key-1].price * item.number}</p>
                        </div>
                    </div>
                </div>
                
                )
            }

            <div className="cart-info-form-sum">
                <div className="cross"></div>
                <div className="cart-sum">
                    <p>Tổng</p>
                    <p>${total}</p>
                </div>
                
            </div>
            <div className="btn-checkout-wrapper">
                <Link to="/payment" className="link nav-link">
                    <button className="cart-checkout-button">Thanh toán</button>
                </Link>
            </div>

            
           
       </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps, null)(CartInfo);