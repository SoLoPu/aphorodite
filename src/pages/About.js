import React from 'react';
import { Container } from 'reactstrap';

import '../css/about.css';


const About = (props) => {
        return(
            
            <div className="about-wrapper">
            <div>
                <img src="https://nature-to-nurture.co.uk/wp-content/uploads/2014/03/Mighty-Tree-With-Green-Leaves-Banner-Nature-To-Nurture-Aromatherapy-In-Hemel-St-Albans.jpg" alt="cart-background" className="about-background-header"></img>
                <h1 className="title-about">Ve chung toi</h1>
            </div>
            <Container fluid="true" className="about">
                <p>
                    Chung toi la mot nhom sinh vien dai hoc Khoa Hoc Tu Nhien <br/>
                    voi mong muon mang lai nhung gi thoai mai nhat ve thoi trang <br/>
                    cho khach hang, chung toi tao ra trang Aphrodite <br/>
                </p>
            </Container>
        </div>

    )
}

export default About;