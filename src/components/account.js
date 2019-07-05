import React, { Component } from 'react';
import { Icon, Button, Avatar, Popover } from 'antd';

import avatar from '../assets/avatar.jpg';

import '../styles/home.css';
import '../styles/account.css';

const privilege = [
  {
    icon: 'cloud',
    title: 'Privilege',
    content: (
      <p>Hello World</p>
    ),
    enable: true
  },
  {
    icon: 'alert',
    title: 'Privilege',
    content: (
      <p>Hello World</p>
    ),
    enable: true
  },
  {
    icon: 'slack-circle',
    title: 'Privilege',
    content: (
      <p>Hello World</p>
    ),
    enable: true
  },
  {
    icon: 'rocket',
    title: 'Privilege',
    content: (
      <p>Hello World</p>
    ),
    enable: true
  },
  {
    icon: 'golden',
    title: 'Privilege',
    content: (
      <p>Hello World</p>
    ),
    enable: true
  },
  {
    icon: 'hourglass',
    title: 'Privilege',
    content: (
      <p>Hello World</p>
    ),
    enable: false
  },
  {
    icon: 'sketch-circle',
    title: 'Privilege',
    content: (
      <p>Hello World</p>
    ),
    enable: false
  }
];

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

  handleOpenAlbum = (item) => {
    alert(item.song)
  }

  handleOpenArtist = (item) => {
    alert(item.artist)
  }

  handleMoreBtn = (item) => {
    alert(item.song)
  }

  handleLogOut = () => {
    this.props.onLogOut();
  }

  render() {
    return (
      <div className="main-view">
        <div className="head-view">
          <div className="search">
            <input className="inputs" placeholder="Search" />
            <Icon className="iicon" type="search" />
          </div>
          <p className="page-name">Account</p>
          <div style={{ textAlign: "left" }}>
            <span style={{ margin: 20, height: 32 }} />
          </div>
        </div>
        <div className="body-view" style={{ color: 'white', paddingLeft: 50, paddingRight: 50 }}>
          <div className="user-info" key='account' style={{ display: "grid", gridTemplateColumns: "60px 500px auto" }}>
            <div style={{ display: this.state.info.avatar !== '' ? 'none' : '' }}>
              <Avatar 
                size={50} 
                style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                {this.state.info.name[0]}
              </Avatar>
            </div>
            <div style={{ display: this.state.info.avatar === '' ? 'none' : '' }}>
              <Avatar size={50} style={{ margin: 0, background: 'none' }} src={avatar} />
            </div>
            <div style={{ textAlign: "left", width: 200, height: 80 }}>
              <p style={{ margin: 0, marginTop: 2, fontSize: 16 }}>Charley Chai</p>
              <p style={{ fontWeight: "bold", margin: 0, fontSize: 12 }}>Premium User</p>
            </div>
            <div onClick={this.handleLogOut.bind(this)} >
              <Button ghost={true} style={{ borderRadius: 100 }}>Log out</Button>
            </div>
          </div>
          <div className="account-left-part">
            <div>
              <div className="account-card">
                <p style={{ color: '#09A97D', fontSize: 18, fontWeight: 'bold', margin: "15px 20px", paddingTop: 15 }}>Profile</p>
                <div className="part-divide" style={{ margin: "0 20px" }} />
                <div>
                  <p className="account-title">User Name</p>
                  <p className="account-content">Charley Chai</p>
                </div>
                <div>
                  <p className="account-title">E-mail</p>
                  <p className="account-content">charley.chai@live.com</p>
                </div>
                <div>
                  <p className="account-title">Date of Birth</p>
                  <p className="account-content">26/02/2017</p>
                </div>
                <div>
                  <p className="account-title">Country</p>
                  <p className="account-content">China</p>
                </div>
                <div style={{ textAlign: "center", margin: 10, height: 50 }}>
                  <Button ghost={true} style={{ borderRadius: 100, width: 200 }}>Edit Profile</Button>
                </div>
              </div>
              <div />
            </div>
            <div>
              <div className="account-card">
                <p style={{ color: '#09A97D', fontSize: 18, fontWeight: 'bold', margin: "15px 20px", paddingTop: 15 }}>Premium</p>
                <div className="part-divide" style={{ margin: "0 20px" }} />
                <div>
                  <p className="account-title">Balance</p>
                  <p className="account-content">$996.233</p>
                </div>
                <div>
                  <p className="account-title">Available Date</p>
                  <p className="account-content">23/02/2018 ～ 23/02/2018</p>
                </div>
                <div>
                  <p className="account-title">Plan</p>
                  <p className="account-content">Family</p>
                </div>
                <div style={{ textAlign: "center", margin: 10, height: 50  }}>
                  <Button ghost={true} style={{ borderRadius: 100, width: 200 }}>Change Plan</Button>
                </div>
              </div>
              <div />
            </div>
          </div>
          <div className="account-card">
            <p style={{ color: '#09A97D', fontSize: 18, fontWeight: 'bold', margin: "15px 20px", paddingTop: 15 }}>Privilege</p>
            <div className="part-divide" style={{ margin: "0 20px" }} />
            {
              privilege.map((p, i) => {
                return(
                  <Popover key={i} content={ p.content } title={ p.title }>
                    <Button ghost={true} shape="circle" style={{ margin: 20, opacity: p.enable ? 0.8 : 0.3 }}>
                      <Icon type={ p.icon } theme="filled" />
                    </Button>
                  </Popover>
                )
              })
            }
            <div style={{ height: 20 }}/>
          </div>
          <div style={{ height: 20 }} />
        </div>
      </div>
    )
  }
}


export default Account;