import React, { Component } from 'react';
import { Icon, Button, Avatar } from 'antd';
import HomeHot from './home-hot';
// import $ from 'jquery'; 

import '../styles/home.css';

import hot from '../assets/icons/hot.svg';
import release from '../assets/icons/release.svg';
import chart from '../assets/icons/chart.svg';


class Home extends Component {
  state = {
    which: 'hot'
  }

  componentDidMount() {

    // $.ajax({
    //   url: "http://localhost:4000/login/cellphone?phone=15256501054&password=a31415926",
    //   xhrFields: {
    //     withCredentials: true
    //   },
    //   success: function (data) {
    //     console.log(data)
    //     $.ajax({
    //       url: "http://localhost:4000/recommend/songs ",
    //       xhrFields: {
    //         withCredentials: true
    //       },
    //       success: function (data) {
    //         console.log(data)
    //       },
    //       error: function (err) {
    //         console.log(err)
    //       }
    //     })
    //   },
    //   error: function (err) {
    //     console.log(err)
    //   }
    // })
  }


  handleMenuClick = (type, event) => {
    this.setState({
      which: type
    })
  }

  render() {
    return (
      <div className="main-view">
        <div className="head-view">
          <div className="search">
            <input className="inputs" placeholder="Search" />
            <Icon className="iicon" type="search" />
          </div>            
          <p className="page-name">Home</p>
          <div style={{ textAlign: "left" }}>
            <span style={{ margin: 20}}>
              <Avatar shape="square" size={18} style={{ margin: 5, background: 'none'  }} src={this.state.which === 'hot' ? hot : null} />
              <Button onClick={ this.handleMenuClick.bind(this, 'hot') }
                type="link" ghost={true} 
                className={`menu-btn ${this.state.which === 'hot' ? 'menu-active' : ''}`}>
                Hot
              </Button>
            </span>
            <span style={{ margin: 20 }}>
              <Avatar shape="square" size={18} style={{ margin: 5, background: 'none' }} src={this.state.which === 'new' ? release : null} />
              <Button onClick={this.handleMenuClick.bind(this, 'new')}
                type="link" ghost={true}
                className={`menu-btn ${this.state.which === 'new' ? 'menu-active' : ''}`}>
                New Release
              </Button>
            </span>
            <span style={{ margin: 20 }}>
              <Avatar shape="square" size={18} style={{ margin: 5, background: 'none' }} src={this.state.which === 'chart' ? chart : null} />
              <Button onClick={this.handleMenuClick.bind(this, 'chart')}
                type="link" ghost={true}
                className={`menu-btn ${this.state.which === 'chart' ? 'menu-active' : ''}`}>
                Chart
              </Button>
            </span>
          </div>
        </div>
        <div className="body-view" style={{ color: 'white' }}>
          <div style={{ display: this.state.which === 'hot' ? '' : 'none' }}>
            <HomeHot onUpdate={this.props.onUpdate} />
          </div>
          <div style={{ display: this.state.which === 'new' ? '' : 'none' }}>
            <p>New</p>
          </div>
          <div style={{ display: this.state.which === 'chart' ? '' : 'none' }}>
            <p>Chart</p>
          </div>
        </div>
      </div>
    )
  }
}


export default Home;