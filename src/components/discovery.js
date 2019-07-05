import React, { Component } from 'react';
import { Icon } from 'antd';


import '../styles/home.css';
import '../styles/account.css';

class Account extends Component {
  state = {
    info: {
      name: 'Charley Chai',
      primuium: true,
      uid: 123456,
      avatar: 'hh',
    }
  }

  handlePlayClick = () => {
    this.setState({
      playing: !this.state.playing
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
          <p className="page-name">Discovery</p>
          <div style={{ textAlign: "left" }}>
            <span style={{ margin: 20, height: 32 }} />
          </div>
        </div>
        <div className="body-view" style={{ color: 'white', paddingLeft: 50, paddingRight: 50 }}>
          <p> Discovery </p>
          <audio style={{ visibility: 'hidden' }}
            controls="controls" >
            <source src="https://music.163.com/song/media/outer/url?id=1371516984.mp3" type="audio/mp3" />
          </audio>
        </div>
      </div>
    )
  }
}


export default Account;