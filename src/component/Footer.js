import React from 'react'
import { Container, Row, Col, InputGroup, Input } from 'reactstrap';
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

import "../css/footer.css"

const Example = (props) => {
  return (
    
      <Container className="footer" fluid="true">
          <Row>
            <Col xs="1" md="1"></Col>
            <Col md="6" className="addressContain">
                <h1 className="titleFooter">APHORODITE</h1>
                <p className="address">227 Nguyen Van Cu, Quan 5, TP Ho Chi Minh</p>
            </Col>
            <Col md="2" className="contact">
                <h4 className="titleFooter">Lien he</h4>
                <Row>
                    <FaFacebookF className="icon"/>
                    <p>Facebook</p>
                </Row>
                <Row>
                    <FaTwitter className="icon"/>
                    <p>Twitter</p>
                </Row>
                <Row>
                    <FaYoutube className="icon"/>
                    <p>Youtube</p>
                </Row>
            </Col>
            <Col md="3" className="contact">
                <h5 className="titleFooter">Nhap email de nhan uu dai</h5>
                <InputGroup style={{width: "250px"}}>
                    <Input placeholder="Nhap email" />
                </InputGroup>
            </Col>
            <Col md="1"></Col>
          </Row>
          
      </Container>

  );
}

export default Example;