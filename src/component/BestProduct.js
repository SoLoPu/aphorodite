import React from 'react';
import '../css/bestproduct.css';
import { Container,  Col } from 'reactstrap' 
import { GrDiamond } from "react-icons/gr";

const BestProduct = (props) => {
    const { category, name, src } = props;
    return(
        <Container fluid={true}>

            <Col xs="auto">
            <div className="BestProduct">
                <img src={src} alt="hello" className="center"/>
                <div className="title-container">
                    <p className="category">{ category }</p>
                    <h2 className="productTitle">{name}</h2>
                    <GrDiamond/>
                    <button type="button" className="shopButton">SHOP NOW</button>
                </div>
                <div style={{backgroundColor:"white", height:"1px"}}></div>
            </div>
            
            </Col>
            
        
        </Container>
        
    )
}






export default BestProduct;