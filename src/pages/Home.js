import React, { Component } from 'react'
import '../css/home.css'

import Carousel from '../component/Carousel'
import BestProduct from '../component/BestProduct';
import TopMenu from '../component/TopMenu';
import Blog from '../component/Blog';

export default class Home extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      items: [
        {
          src: 'https://media.gq.com/photos/5a516a145fcfbf58a755ba59/16:9/w_1600,c_limit/180106_LFWMFW18-19_DR12-6368.jpg',
          altText: 'Slide 1',
          caption: 'Slide 1',
          header: 'Country',
          key: '1'
        },
        {
          src: 'https://trkmedia.ollcdn.net/uploads/public/uploads/public/novosti/5bab90a8085f6_dems.jpeg',
          altText: 'Slide 2',
          caption: 'Slide 2',
          header: 'Modern',
          key: '2'
        },
        {
          src: 'https://media.allure.com/photos/57acc0bd395d60cd5509efe2/16:9/w_1600,c_limit/Street-style-1.jpg',
          altText: 'Slide 3',
          caption: 'Duong Pho',
          header: 'Street',
          key: '3'
        }
      ],
      opacity: 0.2,
      isTop: true
    };

    this.checkTop = this.checkTop.bind(this);
    this.MenuMouseEnter = this.MenuMouseEnter.bind(this);
    this.MenuMouseLeave = this.MenuMouseLeave.bind(this);
  }

  checkTop(){
    if(window.pageYOffset === 0) {
      this.setState({
        ...this.state,
        opacity: 0.2,
        isTop: true
      })

    }
    else {
      this.setState({
        ...this.state,
        opacity: 1,
        isTop: false
      })
    }
  }

  MenuMouseEnter(){
    if(this.state.isTop){
      this.setState({
        ...this.state,
        opacity: 1
      })
    }
  }
  MenuMouseLeave(){
    if(this.state.isTop){
      this.setState({
        ...this.state,
        opacity: 0.2
      })
    }
  }
  
    
    render(){
        return(
            <div className="Home">
                <TopMenu opacity={this.state.opacity} MouseEnter={this.MenuMouseEnter} MouseLeave={this.MenuMouseLeave}/>
                <div className="homeBody">
                <Carousel items={this.state.items}/>
                <div className="best-selling">
                    <BestProduct category="Women's Bag" name="Jackie 1961 small holo bag" src="https://media.gucci.com/style/DarkGray_Center_0_0_650x650/1595521803/360_636706_HUHHG_8565_001_080_0000_Light-Jackie-1961-small-hobo-bag.jpg"/>
                    <BestProduct category="Men" name="Jackie 1961 small holo bag" src="https://media.gucci.com/style/DarkGray_Center_0_0_650x650/1595521803/360_636706_HUHHG_8565_001_080_0000_Light-Jackie-1961-small-hobo-bag.jpg"/>
                    <Blog />
                </div>
                </div>
            </div>
        )
    }

    
    componentDidMount() {
      window.onscroll = ()=>this.checkTop()
    }
    
    componentWillUnmount() {
      window.onscroll = null;
    }
}
