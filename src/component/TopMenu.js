import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavbarBrand, Container } from 'reactstrap';
import { Link } from "react-router-dom";


import '../css/topmenu.css';


import './SearchButton'
import SearchButton from './SearchButton';

class TopMenu extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fixed: "top"
        }
        
    }
    

    render(){
        return (
            <Container className="topmenu" fluid="true"> 
            {/* <div className="title"> 
                <p className="phone">+844654987</p>
                <h1 className="brand">APHRODITE</h1>
                <div className="authentication">
                    <Link to="/login" className="link nav-link">Dang nhap</Link>
                    <Link to="/signup" className="link nav-link">Dang ki</Link>
                    <FaSearch className="iconSearch"/>
                </div>
            </div> */}
                <Navbar fixed={this.state.fixed}  style={{ backgroundColor: "black", opacity: this.props.opacity }} onMouseEnter={this.props.MouseEnter} onMouseLeave={this.props.MouseLeave}>
                    <NavbarBrand className="brand">APHORODITE</NavbarBrand>
                    <Nav className="mr-auto">
                        <NavItem>
                        <Link to="/" className="link nav-link">Trang chu</Link>
                        </NavItem>
                        <NavItem>
                        <Link to="/shop"  className="link nav-link">Mua sam</Link>
                        </NavItem>
                        <NavItem>
                        <Link to="/blog"  className="link nav-link">Blog</Link>
                        </NavItem>
                        <NavItem>
                        <Link to="/about"  className="link nav-link">Ve chung toi</Link>
                        </NavItem>

                    </Nav>
                    <Nav className="ml-auto">
                        <NavItem>
                        <Link to="/login" className="link nav-link">Dang nhap</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/signup" className="link nav-link">Dang ki</Link>
                        </NavItem>
                        <NavItem>
                            
                            <SearchButton />
                        </NavItem>
                    </Nav>
                    </Navbar>
                <hr />
            </Container>
            );
    }

    

    componentDidMount() {
        //window.onscroll = this.checkTop();
    }
      
    componentWillUnmount() {
        //window.onscroll = null;
    }
    
}

export default TopMenu;