import React, { useState } from 'react'
import { useParams } from "react-router";
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from '../actions'


import '../css/detail.css';

// import CarouselDetail from '../component/CarouselDetail'

import database from '../database/data.json';
import SearchItem from '../component/SearchItem';


const width = window.screen.width;



const Detail = (props) => {
        
        const [size, setSize] = useState("S");
        const [color, setColor] = useState("blue");
        const [number, setNumber] = useState(1);

        const samedata = database.slice(0,4);
        let { id } = useParams();

        const selectS = (e) => {
            setSize("S");
        }

        const selectM = (e) => {
            setSize("M");
        }

        const selectL = (e) => {
            setSize("L");
        }


        const plusNumber = () => {
            setNumber(number+1);
        }
        
        const minusNumber = () => {
            if(number>1)
            {
                setNumber(number-1);
            }
        }



        return(
            <div className="Detail">

                <div className="detail-carousel">
                    {/* <CarouselDetail items={items}/> */}
                    <div style={{display:"flex", flexDirection:"row"}}>
                    <img src={database[id-1].src1} alt="" style={{width:width, height: "800px"}}/>
                    {/* <div className="carouselContainer">
                        <h1 className="carouselTitlefadsf">{item.header}</h1>
                        <button className="carouselButton">SHOP NOW</button>
                    </div> */}
                    <img src={database[id-1].src3} alt="" style={{width:width, height: "800px"}}/>
                    </div>
                    <div className="detail-info">
                        <h2 className="detail-name">{database[id-1].name}</h2>
                        <p>${database[id-1].price}</p>
                    </div>
                </div>
                
            <Row>
                <Col md="2"></Col>
                <Col md="4" className="detail-description">
                    <h2 className="detail-desciption-title">Mô tả sản phẩm</h2>
                    <p style={{fontSize: "20px"}}>{database[id-1].description}</p>
                </Col>
                <Col md="1"></Col>
                <Col md="1">
                    <div className="detail-filter">
                        <h3>Họa tiết:</h3>
                    </div>

                    <div className="detail-filter">
                        <h3>Màu sắc:</h3>
                    </div>

                    <div className="detail-filter">
                        <h3>Kích cỡ:</h3>

                    </div>

                    <div className="detail-filter">
                        <h3>Số lượng:</h3>
                    </div>
                </Col>
                <Col md="2">
                <div className="selection detail-pattern">
                        <p>No</p>
                    </div>

                    <div className="selection detail-color">
                       
                        <div style={{backgroundColor: color==="S"?"grey":"black" }}></div>
                        <div style={{backgroundColor: color==="S"?"grey":"red" }}></div>
                        <div style={{backgroundColor: color==="S"?"grey":"white" }}></div>
                    </div>

                    <div className="selection">
                        <button className="detail-size" onClick={selectS} style={{backgroundColor: size==="S"?"grey":"white", color: size==="S"?"white":"black"}}>S</button>
                        <button className="detail-size" onClick={selectM} style={{backgroundColor: size==="M"?"grey":"white", color: size==="M"?"white":"black"}}>M</button>
                        <button className="detail-size" onClick={selectL} style={{backgroundColor: size==="L"?"grey":"white", color: size==="L"?"white":"black"}}>L</button>
                    </div>

                    <div className="detail-number">
                        <button className="detail-number-operator-plus" onClick={minusNumber}>-</button>
                        <div className="detail-number-main">{number}</div>
                        <button className="detail-number-operator-minus" onClick={plusNumber}>+</button>
                    </div>


                    <div className="btn-add-to-card">
                        <button className="button-card" onClick={()=>props.cartAdd(id, size, number, color)}>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col md="2"></Col>
                

            </Row>
            {/* <Row>
                <Col md="1"></Col>
                <Col>
                <a href="/#">Hướng dẫn chọn size</a>
                </Col>
            </Row> */}
            <Row style={{marginTop:"100px", marginLeft: "5px"}}>
               
                <Col>
                    <p  style={{fontSize: "35px", paddingBottom: "20px"}}>Bạn sẽ thích</p>

                </Col>
            </Row>
            <Row style={{marginBottom: "100px", paddingRight:"29px", paddingLeft:"25px"}}>
                
           
                {
                    samedata.map((product) => 
                    <Col md="3" style={{backgroundColor: "#E7E7E7", padding: "0"}} key={product.key}>
                        <SearchItem product={product}/>
                    </Col>
                    )
                }


            </Row>

            </div>
        )
}

const mapStateToProps = state => ({
    cart: state.cart
})


export default connect(mapStateToProps, actions)(Detail);