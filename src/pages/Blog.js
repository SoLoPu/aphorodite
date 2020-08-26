import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import '../css/blog.css'
export default class Blog extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <img 
            src={require("../public/img/blog_banner.jpg")}
            alt="" />
          <p>Where Fashion Gets Easy</p>
        </div>
        <div className="firststep">
          <div className="firststep_title">
            <h4>Bước 1</h4>
            <h2>Bắt đầu từ đâu?</h2>
          </div>
          <div className="firststep_img">
            <Row>
              <Col xs="7">
                <div className="firststep_img_1">
                  <img src={require("../public/img/blog_step1_1.jpeg")} alt=""/>
                  <div className="firststep_img_1_title">
                    <p>PHONG CÁCH CỦA BẠN?</p>
                  </div>
                </div>
              </Col>
              <Col xs="5">
                <Col>
                  <div className="firststep_img_2">
                    <img src={require("../public/img/blog_step1_2.jpeg")} alt=""/>
                    <div className="firststep_img_2_title">
                      <p>SẮP XẾP TỦ QUẦN ÁO</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="firststep_img_3">
                    <img src={require("../public/img/blog_step1_3.jpeg")} alt=""/>
                    <div className="firststep_img_3_title">
                      <p>EBOOK MIỄN PHÍ</p>
                    </div>
                  </div>
                </Col>
              </Col>
            </Row> 
          </div>
          <div>
            <img src={require("../public/img/blog_largeimg.jpg")} alt="" style={{width:"100%"}}/>
          </div>
        </div>  
      </div>
    );
  }
}
