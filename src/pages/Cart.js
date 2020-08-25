import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from '../actions'

import '../css/cart.css';

import CartItem from '../component/CartItem';
import CartInfo from '../component/CartInfo';
import database from '../database/data.json';

import SearchItem from '../component/SearchItem';





const Cart = (props) => {
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


    if(props.cart.length !== 0)
    {
        return(
            <div className="cart-wrapper">
                <div>
                    <img src="http://media.gucci.com/content/ShoppingBagHeroHeaderStandard_1600x480/1590052503/ShoppingBagHeroHeaderStandard_S03-PREFALL-animals_001_Default.jpg" alt="cart-background" className="cart-background-header"></img>
                    <h1 className="title-cart">SHOPPING CART</h1>
                </div>
                <Container fluid="true" className="cart">
                    <Row>
                        <Col md="2"></Col>
                        <Col md="5">
                        <h3 style={{color:"grey"}}>Gio hang</h3>
                            {
                                props.cart.map((item)=>
                                    <CartItem item={item} />
                                )
                            }
                        </Col>
                        <Col md="3">
                            <CartInfo cart={cart}/>
                        
                        </Col>
                        <Col md="2"></Col>
                    </Row>

                    <Row style={{paddingLeft: "200px", marginTop:"100px", borderTop: "1px solid white", paddingTop: "50px"}}>

                        <Col>
                            <p  style={{fontSize: "20px"}}>Ban se thich</p>

                        </Col>
                    </Row>
                    <Row style={{paddingLeft: "200px", paddingRight: "200px", marginBottom: "50px"}}>
                        
                        {
                            samedata.map((product) => 
                            <Col md="3" style={{backgroundColor: "#E7E7E7", padding: "0"}}>
                                <SearchItem product={product}/>
                            </Col>
                            )
                        }


                    </Row>
                </Container>
            </div>
        )
    }
    else {
        return(
            <div className="cart-wrapper">
                <div className="header-empty-cart">
                <Container fluid="true" className="cart-empty">
                    <Row>
                        <Col md="1"></Col>
                        <Col md="6">
                            <div style={{borderBottom: "1px solid white"}}>
                                <h3 style={{color:"white"}}>Gio hang</h3>
                            </div>
                            <h3 style={{color:"white", marginTop:"50px"}}>Hien khong co san pham nao trong gio hang</h3>
                        </Col>
                        <Col md="4" style={{backgroundColor : "white"}}>
                        <div className="cart-empty-info-form">
                            <p>Chung toi co the giup gi cho ban</p>
                            <p>0901564654</p>
                            <p>1753057@student.hcmus.edu.vn</p>
                        </div>
                        </Col>
                        <Col md="1"></Col>
                    </Row>
                    
                </Container>
                    
                </div>
                <Container fluid="true" className="cart">
                <Row style={{paddingLeft: "200px"}}>

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
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps,actions)(Cart);