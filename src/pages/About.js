import React from 'react';
import { Container } from 'reactstrap';

import '../css/about.css';


const About = (props) => {
        return(
            
            <div className="about-wrapper">
            <div>
                <img src="https://nature-to-nurture.co.uk/wp-content/uploads/2014/03/Mighty-Tree-With-Green-Leaves-Banner-Nature-To-Nurture-Aromatherapy-In-Hemel-St-Albans.jpg" alt="cart-background" className="about-background-header"></img>
                <h1 className="title-about">Thông tin về chúng tôi</h1>
            </div>
            <Container fluid="true" className="about">
                <p>
                    Chúng tôi là nhóm sinh viên đại học Khoa Học Tự Nhiên <br/>
                    với mong muốn mang lại những điều mới nhất tuyệt vời nhất về <br/>
                    thời trang cho khách hàng, chúng tôi tạo ra trang Aphrodite <br/>
                </p>
            </Container>
        </div>

    )
}

export default About;