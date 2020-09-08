import React from 'react'
import { Container, Row, Col, InputGroup, Input } from 'reactstrap';
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

import "../css/footer.css"

const Footer = (props) => {
  return (
    
      <Container className="footer" fluid="true">
          <Row>
            <Col xs="1" md="1"></Col>
            <Col md="6" className="addressContain">
                <h1 className="titleFooter">APHRODITE</h1>
                <p className="address">227 Nguyễn Văn Cừ, Quận 5, TP Hồ Chí Minh</p>
            </Col>
            <Col md="2" className="contact">
                <h4 className="titleFooter">Liên hệ</h4>
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
                <h5 className="titleFooter">Nhập email để nhận ưu đãi</h5>
                <InputGroup style={{width: "250px"}}>
                    <Input placeholder="Nhập email" />
                </InputGroup>
            </Col>
            <Col md="1"></Col>
          </Row>
          
      </Container>

  );
}

export default Footer;