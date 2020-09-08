import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



import Footer from './component/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import TopMenu from './component/TopMenu';
import Collection from './pages/Collection';
import SearchResult from './pages/SearchResult';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Payment from './pages/Payment'

import ScrollToTop from './component/ScrollToTop';



class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      opacity: 0,
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
        opacity: 0,
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
        opacity: 0
      })
    }
  }
  
  render(){
    return (
      <Router>
        <ScrollToTop />
        <div className="App">
        <TopMenu opacity={this.state.opacity} MouseEnter={this.MenuMouseEnter} MouseLeave={this.MenuMouseLeave} props={this.props}/>
          <Switch>
          <Route path="/payment">
              <Payment />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/collection">
              <Collection />
            </Route>
            <Route path="/detail/:id">
              <Detail />
            </Route>
            <Route path="/search">
              <SearchResult />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
  
  
        <Footer />
          
        </div>
      </Router>
    );

  }

  componentDidMount() {
    window.onscroll = ()=>this.checkTop()
  }
  
  componentWillUnmount() {
    window.onscroll = null;
  }
  
}

export default App;
