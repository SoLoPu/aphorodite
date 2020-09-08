import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from '../actions'

import '../css/cart.css';

import CartItem from '../component/CartItem';
import CartInfo from '../component/CartInfo';
import database from '../database/data.json';

import SearchItem from '../component/SearchItem';





const Cart = (props) => {
    const samedata = database.slice(10,14);


    const { cart, cartIncrease, cartDecrease, cartDelete } = props;

    const [total, settotal] = useState(0);

    useEffect(() => {
        let temp = 0;

        for(let i=0; i<cart.length; i++){
            temp+=database[cart[i].key-1].price*cart[i].number;
        }
        settotal(temp);
    }, []);

    const cartIncreaseTotal = (key) => {
        settotal(total+database[key-1].price);
        cartIncrease(key);
    }

    const cartDecreaseTotal = (key) => {
        if((total-database[key-1].price)!==0)
        {
            settotal(total-database[key-1].price);
            cartDecrease(key);
        }
        
        
    }

    const cartDeleteTotal = (item) => {
        settotal(total-database[item.key-1].price*item.number);
        cartDelete(item.key);
    }

    if(props.cart.length !== 0)
    {
        return(
            <div className="cart-wrapper">
                <div>
                    <img src="http://media.gucci.com/content/ShoppingBagHeroHeaderStandard_1600x480/1590052503/ShoppingBagHeroHeaderStandard_S03-PREFALL-animals_001_Default.jpg" alt="cart-background" className="cart-background-header"></img>
                    <h1 className="title-cart">GIỎ HÀNG</h1>
                </div>
                <Container fluid="true" className="cart">
                    <Row>
                        <Col md="2"></Col>
                        <Col md="5">
                        <h3 style={{color:"grey"}}>Giỏ hàng</h3>
                            {
                                props.cart.map((item)=>
                                    <CartItem item={item} key={item.key} cartIncrease={cartIncreaseTotal} cartDecrease={cartDecreaseTotal} cartDelete={cartDeleteTotal}/>
                                )
                            }
                        </Col>
                        <Col md="3">
                            <CartInfo cart={props.cart} total={total}/>
                        
                        </Col>
                        <Col md="2"></Col>
                    </Row>

                    <Row style={{paddingLeft: "100px", marginTop:"20px", borderTop: "1px solid white", paddingTop: "50px"}}>

                        <Col>
                        <p  className="cart-related-title">Bạn sẽ thích</p>
                        </Col>
                    </Row>
                    <Row className="cart-related">
                        
                        {
                            samedata.map((product) => 
                            <Col md="3" style={{backgroundColor: "#E7E7E7", padding: "0"}} key={product.key}>
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
                                <h3 style={{color:"white"}}>Giỏ hàng</h3>
                            </div>
                            <h3 style={{color:"white", marginTop:"50px"}}>Hiện không có sản phẩm nào trong giỏ hàng</h3>
                        </Col>
                        <Col md="4" style={{backgroundColor : "white"}}>
                        <div className="cart-empty-info-form">
                            <p>Chúng tôi có thể giúp gì cho bạn</p>
                            <p>0901564654</p>
                            <p>1753057@student.hcmus.edu.vn</p>
                        </div>
                        </Col>
                        <Col md="1"></Col>
                    </Row>
                    
                </Container>
                </div>
                <Container fluid="true" className="cart">
                <Row style={{paddingLeft: "25px"}}>
                        <Col>
                            <p  className="cart-related-title">Bạn sẽ thích</p>
                        </Col>
                    </Row>
                    <Row className="cart-related">
                        {
                            samedata.map((product) => 
                            <Col md="3" style={{backgroundColor: "#E7E7E7", padding: "0"}} key={product.key}>
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