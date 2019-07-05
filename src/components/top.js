import React, { Component } from 'react';
import { Layout, Badge, Avatar, Icon, Menu } from 'antd';

import HomePage from './home';
import Player from './player';
import Account from '../containers/accountPage';
import Discovery from './discovery';
import Artist from './artist';
import Signin from '../containers/signinPage';

import '../styles/top.css';
import avatar from '../assets/avatar.jpg';

const { Content, Footer, Sider } = Layout;

const playlist = [
  { name: "like fly" },
  { name: "old time" },
  { name: "love songs" },
  { name: "Taylor's" },
  { name: "travel" }
];

class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
      which: 'home',
      login: false,
      src: "https://music.163.com/song/media/outer/url?id=1371516984.mp3"
    }
  }

  handleSelect = (tab) => {
    this.setState({
      which: tab.key
    });
    console.log(tab);
  }

  handleLogin = () => {
    this.setState({
      which: 'account'
    });
  }
  
  onUpdate = (src) => {
    alert(src)
    this.setState({
      src: src
    })
  }

  render() {
    return (
      <Layout className="top-layout">
        <Content style={{ background: "black" }}>
          <Sider
            style={{
              background: 'black',
              height: '100%',
              left: 0,
              overflow: 'auto',
              position: 'fixed',
          }}>
            <div className="darg-area" />
            <div className="user-info" key='account' onClick={this.handleLogin.bind(this)}>
              <div id="avatar" >
                <Badge dot={true}>
                  <Avatar size={40} src={avatar} />
                </Badge>
              </div>
              <div id="user-name">
                <p style={{ margin: 0, fontSize: 16 }}>Charley Chai</p>
                <p style={{ fontWeight: "bold", margin: 0, fontSize: 12 }}>Premium User</p>
              </div>
            </div>
            <Menu
              onSelect={ this.handleSelect.bind(this) }
              theme="dark"
              mode="inline"
              selectedKeys={[this.state.which]}
              defaultOpenKeys={['home']}
              style={{ textAlign: 'left', background: 'black' }}
            >
              <Menu.Item key="home">
                <Icon type="home" className="side-icon" />
                <span className="nav-text">Home</span>
              </Menu.Item>
              <Menu.Item key="discovery">
                <Icon type="compass" className="side-icon" />
                <span className="nav-text">Discovery</span>
              </Menu.Item>
              <Menu.Item key="radio">
                <Icon type="wifi" className="side-icon" />
                <span className="nav-text">Radio</span>
              </Menu.Item>
              <Menu.Item key="foryou">
                <Icon type="heart" className="side-icon" />
                <span className="nav-text">For you</span>
              </Menu.Item>
              <Menu.SubMenu
                key="personal"
                className="submenu"
                title={
                  <span>
                    <Icon type="star" className="side-icon" />
                    <span className="nav-text">Library</span>
                  </span>
                }
              >
                <Menu.Item key="p-songs">
                  <Icon type="customer-service" className="side-icon" />
                  <span className="nav-text">Songs</span>
                </Menu.Item>
                <Menu.Item key="p-playlist">
                  <Icon type="unordered-list" className="side-icon" />
                  <span className="nav-text">Playlists</span>
                </Menu.Item>
                <Menu.Item key="p-artist">
                  <Icon type="user" className="side-icon" />
                  <span className="nav-text">Artists</span>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu
                key="playlist"
                className="submenu"
                title={
                  <span>
                    <Icon type="align-left" className="side-icon" />
                    <span className="nav-text">Playlists</span>
                  </span>
                }
              >
                {
                  playlist.map((pl, i) => {
                    return (
                      <Menu.Item key={"playlist-" + i}>
                        <Icon type="unordered-list" className="side-icon" />
                        <span className="nav-text">{pl.name}</span>
                      </Menu.Item>
                    )
                  })
                }
              </Menu.SubMenu>
            </Menu>
            <div style={{ height: 70 }} />
          </Sider>
          <div style={{ minHeight: 650, marginLeft: 200 }}>
            <div style={{ display: this.state.which === 'account' ? '' : 'none' }}>
              {
                this.props.signIn ? <Account /> : <Signin/>
              }
            </div>
            <div style={{ display: this.state.which === 'home' ? '' : 'none' }}>
              <HomePage onUpdate={ this.onUpdate } />
            </div>
            <div style={{ display: this.state.which === 'discovery' ? '' : 'none' }}>
              <Discovery />
            </div>
            <div style={{ display: this.state.which === 'radio' ? '' : 'none' }}>
              <Artist />
            </div>
            {/* <div style={{ display: this.state.which === 'radio' ? '' : 'none' }}>
              <h1>radio</h1>
            </div> */}
            <div style={{ display: this.state.which === 'foryou' ? '' : 'none' }}>
              <h1>foryou</h1>
            </div>
            <div style={{ display: this.state.which === 'p-songs' ? '' : 'none' }}>
              <h1>P songs</h1>
            </div>
            <div style={{ display: this.state.which === 'p-playlist' ? '' : 'none' }}>
              <h1>P playlist</h1>
            </div>
            <div style={{ display: this.state.which === 'p-artist' ? '' : 'none' }}>
              <h1>P artists</h1>
            </div>
            <div style={{ display: this.state.which.substr(0, this.state.which.length - 2) === 'playlist' ? '' : 'none' }}>
              <h1>{this.state.which }</h1>
            </div>
          </div>
        </Content>
        <Footer className="top-player">
          <Player src={ this.state.src } />
        </Footer>
      </Layout>
    );
  }
}

export default Top;
