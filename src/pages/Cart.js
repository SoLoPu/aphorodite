import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../css/cart.css';

import CartItem from '../component/CartItem';
import CartInfo from '../component/CartInfo';
import database from '../database/data.json';

import SearchItem from '../component/SearchItem';



const Cart = () => {
    const samedata = database.slice(0,4);

    const cart = [
        {
            key: 5,
            size: "L",
            number: "6",
            color: "blue"
        },
        {
            key: 12,
            size: "S",
            number: "4",
            color: "blue"
        },
        {
            key: 16,
            size: "L",
            number: "7",
            color: "blue"
        }
    ]

    return(
        <Container fluid="true" className="cart">
            <Row>
                <Col md="1"></Col>
                <Col>
                    <h3>Gio hang</h3>
                </Col>
            </Row>
            <Row>
                <Col md="1"></Col>
                <Col md="5">
                    {
                        cart.map((item)=>
                            <CartItem item={item} />
                        )
                    }
                </Col>
                <Col md="5">
                    <CartInfo cart={cart}/>
                
                </Col>
                <Col md="1"></Col>
            </Row>

            <Row style={{marginTop:"20px"}}>
                <Col md="1"></Col>
                <Col>
                    <p  style={{fontSize: "20px"}}>Ban se thich</p>

                </Col>
            </Row>
            <Row style={{paddingLeft: "200px", paddingRight: "200px", marginBottom: "100px"}}>
                
           
                {
                    samedata.map((product) => 
                    <Col md="3" style={{backgroundColor: "#E7E7E7", padding: "0"}}>
                        <SearchItem product={product}/>
                    </Col>
                    )
                }


            </Row>
        </Container>
    )
}

export default Cart;