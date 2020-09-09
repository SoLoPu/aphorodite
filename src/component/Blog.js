import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import '../css/blog.css';
import { Link } from "react-router-dom";


const Blog = () => {
        return(
            <Container className="Blog" fluid="true">
                <div className="blog-title">
                    <h1 style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop: "50px"}}>BLOG</h1>
                </div>
                
                <Row style={{paddingTop: "100px"}}>

                <Col md="1"></Col>
                <Col md="3" >
                    <Row>
                        <BlogItem 
                            src="https://media.gucci.com/content/StyleNewsSingle_Standard_340x202/1595000703/StyleNewsSingle_S01-EPILOGUE-VIDEO-01_001_Default.jpg"
                            name="Đánh giá Gucci Epilogue"
                            link="THE VIDEO"
                        />
                    </Row>
                    <Row>
                    <BlogItem 
                            src="https://media.gucci.com/content/StyleNewsSingle_Standard_340x202/1593591303/StyleNewsSingle_StandwithWomen-1_001_Default.jpg"
                            name="#StandWithWomen"
                            link="AGAINST GENDER-BASED VIOLENCE"
                        />
                    </Row>
                </Col>
                <Col md="1"></Col>
                <Col md="3" style={{marginLeft:"-20px"}}>
                    <Row>
                    <BlogItem 
                            src="https://media.gucci.com/content/StyleNewsDoubleVertical_Standard_340x602/1594990803/StyleNewsDoubleVertical_F01-EPILOGUE-LOOK-001_001_Default.jpg"
                            name="Epilogue: Chi tiết"
                            link="AS TOLD BY ALESSANDRO MICHELE"
                        />
                    </Row>
                </Col>
                <Col md="1"></Col>
                <Col md="3" style={{marginLeft:"-35px"}}>
                    <Row>
                    <BlogItem 
                            src="https://media.gucci.com/content/StyleNewsSingle_Standard_340x202/1594739703/StyleNewsSingle_notes-from-the-silence_001_Default.jpg"
                            name="Ghi chú từ The Silence"
                            link="ALESSANDRO MICHELE'S DIARY"
                        />
                    </Row>
                    <Row>
                    <BlogItem 
                            src="https://media.gucci.com/content/StyleNewsSingle_Standard_340x202/1595242805/StyleNewsSingle_Epilogue-beauty-01_001_Default.jpg"
                            name="#Vẻ đẹp của Epilogue"
                            link="IN DETAIL"
                        />
                    </Row>
                </Col>
                
                
                </Row>


                
                
     

            </Container>
        )
}



const BlogItem = (props) => {
    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", marginBottom: "100px"}}>
            <img src={props.src} alt="hello"/>
            <h5 style={{marginTop: "25px"}}>{props.name}</h5>
            <Link to="/blog"  style={{color:"black"}}>
                <p>{props.link} {">"} </p>
            </Link>
            
        </div>
    )
}

export default Blog;