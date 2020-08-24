import React from 'react'
import { useParams } from "react-router";
import { Container, Row, Col } from 'reactstrap';
import '../css/detail.css'

import CarouselDetail from '../component/CarouselDetail'

import database from '../database/data.json';
import SearchItem from '../component/SearchItem';
import SearchResult from './SearchResult';




const Detail = () => {
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
                src1: "media.gucci.com/style/DarkGray_Center_0_0_490x490/1595436309/636709_10O0G_1000_005_100_0000_Light-Jackie-1961-small-hobo-bag.jpg",
                src2: "media.gucci.com/style/DarkGray_Center_0_0_490x490/1594744211/636709_10O0G_1000_001_080_0000_Light-Jackie-1961-small-hobo-bag.jpg"
                
            }
        ]

        const samedata = database.slice(0,4);
        let { id } = useParams();
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
                       
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <div className="selection detail-size">
                        
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                    </div>

                    <div className="detail-number">
                        <button className="detail-number-operator-plus">-</button>
                        <div className="detail-number-main">2</div>
                        <button className="detail-number-operator-minus">+</button>
                    </div>


                    <div className="btn-add-to-card">
                        <button className="button-card">Them vao gio hang</button>
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

export default Detail;