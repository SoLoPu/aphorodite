import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from '../actions'
import { useHistory } from "react-router-dom";


// import '../css/cart.css';
import '../css/payment.css';


import PaymentInfo from '../component/PaymentInfo';
import database from '../database/data.json';


import SearchItem from '../component/SearchItem';





const Payment = (props) => {
    const samedata = database.slice(10,14);


    const { cart } = props;

    const [total, settotal] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState(""); 
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [note, setNote] = useState("");
    const [hiddenForm, setHiddenForm] = useState(true);
    const [hiddenDone, setHiddenDone] = useState(false);

    const history = useHistory();

    useEffect(() => {
        let temp = 0;

        for(let i=0; i<cart.length; i++){
            temp+=database[cart[i].key-1].price*cart[i].number;
        }
        settotal(temp);
    }, [cart]);

    const comfirmPayment = () => {
        if(name!=="" && phone!=="" && email!=="" && address!==""){
            setHiddenDone(true);
            setHiddenForm(false);
        }
        else {
            alert("Error: Some fields is missing!!")
        }
        
    }

    const comfirmPaymentDone = () => {
        history.push(`/`);
        props.cartClear();
    }
    const changeName = (e) => {
        setName(e.target.value);
    }


    const changeEmail = (e) => {
        setEmail(e.target.value);
    }

    const changeAddress = (e) => {
        setAddress(e.target.value);
    }

    const changePhone = (e) => {
        setPhone(e.target.value);
    }


    const changeNote = (e) => {
        setNote(e.target.value);
    }

        return(
            <div className="cart-wrapper">
                <div>
                    <img src="http://media.gucci.com/content/ShoppingBagHeroHeaderStandard_1600x480/1590052503/ShoppingBagHeroHeaderStandard_S03-PREFALL-animals_001_Default.jpg" alt="cart-background" className="cart-background-header"></img>
                    <h1 className="title-cart">Thanh toán</h1>
                </div>
                {
                    hiddenForm && <Container fluid="true" className="cart">
                        <Row>
                            <Col md="2"></Col>
                            <Col md="5">
                            <h3 className="payment-header">Thông tin địa chỉ</h3>
                                <div className="payment-info-wrapper">
                                    <p className="payment-info-title">Tên người nhận <p style={{color:"red"}}>*</p></p>
                                    <input type="text" className="payment-info-input" onChange={changeName}/>
                                    
                                </div>
                                <div className="payment-info-wrapper">
                                    <p className="payment-info-title">Email<p style={{color:"red"}}>*</p></p>
                                    <input type="email" pattern=".+@google.com" className="payment-info-input" autoComplete="on" onChange={changeEmail} required/>
                                </div>
                                <div className="payment-info-wrapper">
                                    <p className="payment-info-title">Số điện thoại<p style={{color:"red"}}>*</p></p>
                                    <input type="text" className="payment-info-input" onChange={changePhone}/>
                                </div>
                                <div className="payment-info-wrapper">
                                    <p className="payment-info-title">Địa chỉ<p style={{color:"red"}}>*</p></p>
                                    <input type="text" className="payment-info-input" onChange={changeAddress}/>
                                </div>

                                <h3 className="payment-header">Khuyến mãi</h3>
                                <div className="payment-info-wrapper">
                                    <p className="payment-info-title">Voucher</p>
                                    <input type="text" className="payment-info-input"/>
                                </div>

                                <h3 className="payment-header">Ghi chú</h3>
                                <div className="payment-info-wrapper">
                                    <textarea type="text" className="payment-info-input-note" onChange={changeNote}/>
                                </div>
                                
                            
                            </Col>
                            <Col md="3">
                                <PaymentInfo cart={props.cart} total={total} comfirmPayment={comfirmPayment} isHidden={false}/>
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
                }

                {
                    hiddenDone && <Container fluid="true" className="cart">
                    <h2 style={{display:"flex", justifyContent: "center", alignItems: "center", color:"#00e64d", marginBottom: "10px"}}>Xác nhận đơn hàng thành công</h2>
                    <p style={{display:"flex", justifyContent: "center", alignItems: "center", color:"#00e64d", paddingBottom: "50px"}}>Chúng tôi sẽ liên hệ với bạn ngay</p>
                    <Row>
                        <Col md="3"></Col>
                        <Col md="3">
                        <h3 className="payment-header">Thông tin khách hàng</h3>
                            <div className="payment-info-wrapper">
                                <p className="payment-info-title">Tên người nhận:</p>
                                <p>{name}</p>
                                
                            </div>
                            <div className="payment-info-wrapper">
                                <p className="payment-info-title">Email:</p>
                                <p>{email}</p>                            
                            </div>
                            <div className="payment-info-wrapper">
                                <p className="payment-info-title">Số điện thoại:</p>
                                <p>{phone}</p>                            
                            </div>
                            <div className="payment-info-wrapper">
                                <p className="payment-info-title">Địa chỉ:</p>
                                <p>{address}</p>   
                            </div>

                       
                            <div className="payment-info-wrapper">
                                <p className="payment-info-title">Ghi chú:</p>
                                <p>{note}</p>   
                            </div>

                            
                        
                        </Col>
                        <Col md="3">
                            <PaymentInfo cart={props.cart} total={total} isHidden={true} comfirmPaymentDone={comfirmPaymentDone}/>
                        
                        </Col>
                        <Col md="3"></Col>
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
                }
            </div>
        )
    
}

const mapStateToProps = state => ({
    cart: state.cart
})




export default connect(mapStateToProps,actions)(Payment)