import React, { Component } from 'react'
import '../css/home.css'

import Carousel from '../component/Carousel'
import BestProduct from '../component/BestProduct';
import Blog from '../component/Blog';

import database from '../database/data.json'
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
      ]
      
    };

   
  }
  
    render(){
        return(
            <div className="Home">
                <div className="homeBody">
                <Carousel items={this.state.items}/>
                <div className="best-selling">
                    <BestProduct category="VÁY NỮ" name={database[10].name} src={database[10].src1}/>
                    <BestProduct category="GIÀY" name={database[14].name} src={database[14].src1}/>
                    <Blog />
                </div>
                </div>
            </div>
        )
    }

    
    componentDidMount() {

    }
    
    componentWillUnmount() {

    }
}
