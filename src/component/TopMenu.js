import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavbarBrand, Container } from 'reactstrap';
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"
import { connect } from 'react-redux';


import '../css/topmenu.css';


import './SearchButton'
import SearchButton from './SearchButton';

const TopMenu = (props) =>  {

    const [fixed] = useState("top");
        return (
            <Container className="topmenu" fluid="true" opacity={props.opacity}> 
            
                {/* <div className="title"> 
                    <p className="phone">+844654987</p>
                    <h1 className="brand">APHRODITE</h1>
                    <div className="authentication">
                        <Link to="/login" className="link nav-link">Dang nhap</Link>
                        <Link to="/signup" className="link nav-link">Dang ki</Link>
                        
                    </div> 
                </div> */}

                <Navbar fixed={fixed} style={{ backgroundImage: `linear-gradient( rgba(0,0,0,1), rgba(0,0,0,${props.opacity}))` }} onMouseEnter={props.MouseEnter} onMouseLeave={props.MouseLeave}>
                    <NavbarBrand className="brand">
                        <Link to="/" className="link nav-link">APHRODITE</Link>
                    </NavbarBrand>
                    <Nav className="mr-auto">
                        <NavItem>
                        <Link to="/" className="link nav-link">TRANG CHỦ</Link>
                        </NavItem>
                        <NavItem>
                        <Link to="/shop"  className="link nav-link">MUA SẮM</Link>
                        </NavItem>
                        <NavItem>
                        <Link to="/blog"  className="link nav-link">BLOG</Link>
                        </NavItem>
                        <NavItem>
                        <Link to="/about"  className="link nav-link">VỀ CHÚNG TÔI</Link>
                        </NavItem>

                    </Nav>
                    <Nav className="ml-auto">
                        <NavItem>
                        <Link to="/login" className="link nav-link">ĐĂNG NHẬP</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/signup" className="link nav-link">ĐĂNG KÍ</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/cart" className="link nav-link">
                                <FaShoppingCart className="icon-cart"/>
                                <p className="cart-badge">{props.cart.length}</p>
                            </Link>
                        </NavItem>
                        <NavItem>      
                            <SearchButton props={props}/>
                        </NavItem>
                    </Nav>
                    </Navbar>
                <hr />
            </Container>
            );
}



const mapStateToProps = state => ({
    cart: state.cart
})
    

export default connect(mapStateToProps,null)(TopMenu);