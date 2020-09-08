import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from '../actions'

// import '../css/cart.css';
import '../css/payment.css';


import PaymentInfo from '../component/PaymentInfo';
import database from '../database/data.json';


import SearchItem from '../component/SearchItem';





const Payment = (props) => {
    const samedata = database.slice(10,14);


    const { cart } = props;

    const [total, settotal] = useState(0);

    useEffect(() => {
        let temp = 0;

        for(let i=0; i<cart.length; i++){
            temp+=database[cart[i].key-1].price*cart[i].number;
        }
        settotal(temp);
    }, []);


        return(
            <div className="cart-wrapper">
                <div>
                    <img src="http://media.gucci.com/content/ShoppingBagHeroHeaderStandard_1600x480/1590052503/ShoppingBagHeroHeaderStandard_S03-PREFALL-animals_001_Default.jpg" alt="cart-background" className="cart-background-header"></img>
                    <h1 className="title-cart">Thanh toán</h1>
                </div>
                <Container fluid="true" className="cart">
                    <Row>
                        <Col md="2"></Col>
                        <Col md="5">
                        <h3 className="payment-header">Thông tin địa chỉ</h3>
                            <div className="payment-info-wrapper">
                                <p className="payment-info-title">Tên người nhận</p>
                                <input type="text" className="payment-info-input"/>
                            </div>
                            <div className="payment-info-wrapper">
                                <p className="payment-info-title">Email</p>
                                <input type="text" className="payment-info-input"/>
                            </div>
                            <div className="payment-info-wrapper">
                                <p className="payment-info-title">Số điện thoại</p>
                                <input type="text" className="payment-info-input"/>
                            </div>
                            <div className="payment-info-wrapper">
                                <p className="payment-info-title">Địa chỉ</p>
                                <input type="text" className="payment-info-input"/>
                            </div>

                            <h3 className="payment-header">Khuyến mãi</h3>
                            <div className="payment-info-wrapper">
                                <p className="payment-info-title">Voucher</p>
                                <input type="text" className="payment-info-input"/>
                            </div>

                            <h3 className="payment-header">Ghi chú</h3>
                            <div className="payment-info-wrapper">
                                <textarea type="text" className="payment-info-input-note"/>
                            </div>
                            
                        
                        </Col>
                        <Col md="3">
                            <PaymentInfo cart={props.cart} total={total}/>
                        
                        </Col>
                        <Col md="2"></Col>
                    </Row>

                   

                   

                    <Row style={{paddingLeft: "20px", marginTop:"20px", paddingTop: "50px"}}>

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

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps,actions)(Payment)