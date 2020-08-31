import React, { useState } from 'react'
import { useParams } from "react-router";
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from '../actions'


import '../css/detail.css';

import CarouselDetail from '../component/CarouselDetail'

import database from '../database/data.json';
import SearchItem from '../component/SearchItem';




const Detail = (props) => {
        const items = [
            {
                key:"1",
                src1: 'media.gucci.com/style/DarkGray_Center_0_0_490x490/1595436309/636709_10O0G_1000_005_100_0000_Light-Jackie-1961-small-hobo-bag.jpg',
                src2: 'media.gucci.com/style/DarkGray_Center_0_0_490x490/1594744211/636709_10O0G_1000_001_080_0000_Light-Jackie-1961-small-hobo-bag.jpg'
            },
            {
                key:"2",
                src1: "media.gucci.com/style/DarkGray_Center_0_0_490x490/1595436309/636709_10O0G_1000_005_100_0000_Light-Jackie-1961-small-hobo-bag.jpg",
                src2: "media.gucci.com/style/DarkGray_Center_0_0_490x490/1594744211/636709_10O0G_1000_001_080_0000_Light-Jackie-1961-small-hobo-bag.jpg"
                
            },
            {
                key:"3",
                src1: "media.gucci.cclassnamsom/style/DarkGray_Center_0_0_490x490/1595436309/636709_10O0G_1000_005_100_0000_Light-Jackie-1961-small-hobo-bag.jpg",
                src2: "media.gucci.com/style/DarkGray_Center_0_0_490x490/1594744211/636709_10O0G_1000_001_080_0000_Light-Jackie-1961-small-hobo-bag.jpg"
                
            }
        ]
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
            <Container fluid={true}>
                <div className="detail-carousel">
                    <CarouselDetail items={items}/>
                    <div className="detail-info">
                        <h2 className="detail-name">{database[id-1].name}</h2>
                        <p>{database[id-1].price}</p>
                    </div>
                </div>
                
            <Row>
                <Col md="1"></Col>
                <Col md="2">
                    <div className="detail-filter">
                        <h3>Hoa tiet:</h3>
                    </div>

                    <div className="detail-filter">
                        <h3>Mau sac:</h3>
                    </div>

                    <div className="detail-filter">
                        <h3>Kich Co:</h3>

                    </div>

                    <div className="detail-filter">
                        <h3>So Luong:</h3>
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
                        <button className="detail-size" onClick={selectS} style={{backgroundColor: size==="S"?"grey":"white" }}>S</button>
                        <button className="detail-size" onClick={selectM} style={{backgroundColor: size==="M"?"grey":"white" }}>M</button>
                        <button className="detail-size" onClick={selectL} style={{backgroundColor: size==="L"?"grey":"white" }}>L</button>
                    </div>

                    <div className="detail-number">
                        <button className="detail-number-operator-plus" onClick={minusNumber}>-</button>
                        <div className="detail-number-main">{number}</div>
                        <button className="detail-number-operator-minus" onClick={plusNumber}>+</button>
                    </div>


                    <div className="btn-add-to-card">
                        <button className="button-card" onClick={()=>props.cartAdd(id, size, number, color)}>Them vao gio hang</button>
                    </div>
                </Col>
                <Col md="2"></Col>
                <Col md="4" className="detail-description">
                    <h2 className="detail-desciption-title">Mo ta san pham</h2>
                    <p>{database[id-1].description}</p>
                </Col>

            </Row>
            <Row>
                <Col md="1"></Col>
                <Col>
                <a href="/#">Huong dan chon size</a>

                </Col>
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


export default connect(mapStateToProps, actions)(Detail);