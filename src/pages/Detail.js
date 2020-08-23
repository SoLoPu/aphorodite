import React from 'react'
import { useParams } from "react-router";
import { Container, Row, Col } from 'reactstrap';
import '../css/detail.css'

import CarouselDetail from '../component/CarouselDetail'

import database from '../database/data.json';


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
                
            <Row style={{paddingLeft:"100px", paddingRight:"200px"}}>
                <Col md="2">
                    <div className="selection detail-pattern">
                        <h3>Hoa Tiet</h3>
                        
                    </div>

                    <div className="selection detail-color">
                        <h3>Mau sac</h3>

                    </div>

                    <div className="selection detail-size">
                        <h3>Kich Co</h3>

                    </div>

                    <div className="selection detail-soluong">
                        <h3>So Luong</h3>

                    </div>


                    <div className="btn-add-to-card">
                        <h3>Them vao gio hang</h3>
                        <div>3 size</div>
                    </div>
                </Col>
                <Col md="3">
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

                    <div className="selection detail-soluong">
                        
                        <div></div>
                    </div>


                    <div className="btn-add-to-card">
                        
                        <div>3 size</div>
                    </div>
                </Col>
                <Col md="2"></Col>
                <Col md="5">
                    <h2>Mo ta san pham</h2>
                    <p>{database[id-1].description}</p>
                </Col>

            </Row>
            </Container>
            </div>
        )
}

export default Detail;