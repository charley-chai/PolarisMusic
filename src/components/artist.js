import React, { Component } from 'react';
import { Icon, Button, Avatar } from 'antd';

import '../styles/account.css';
import '../styles/artist.css';

import like from '../assets/icons/heart-line.svg';
import liked from '../assets/icons/heart-fill.svg';
import add from '../assets/icons/add.svg';
import added from '../assets/icons/added.svg';
import mv from '../assets/icons/mv.svg';
import mv1 from '../assets/icons/mv1.svg';

import cover from '../assets/debug/artist/taylor.png';
import s1 from '../assets/debug/artist/songs/delicate.png';
import s2 from '../assets/debug/artist/songs/shakeitoff.png';
import s3 from '../assets/debug/artist/songs/idontwanne.png';
import s4 from '../assets/debug/artist/songs/22.png';

import ml from '../assets/debug/artist/similar/ml.png';
import dl from '../assets/debug/artist/similar/dl.png';
import ad from '../assets/debug/artist/similar/adele.png';
import ka from '../assets/debug/artist/similar/katy.png';
import ag from '../assets/debug/artist/similar/ag.png';
import ca from '../assets/debug/artist/similar/carly.png';

import a_hot from '../assets/debug/artist/albums/1989.png';
import a_new from '../assets/debug/artist/albums/me.png';
import rp from '../assets/debug/artist/albums/rp.png';
import red from '../assets/debug/artist/albums/red.png';
import fl from '../assets/debug/artist/albums/fl.png';
import sn from '../assets/debug/artist/albums/sn.png';
import ts from '../assets/debug/artist/albums/ts.png';
 
const similar = [
  {
    name: "Miley Cyrus",
    avatar: ml
  },
  {
    name: "Katy Perry",
    avatar: ka
  },
  {
    name: "Ariana Grande",
    avatar: ag
  },
  {
    name: "Adele",
    avatar: ad
  },
  {
    name: "Demi Lovato",
    avatar: dl
  },
  {
    name: "Carley Rae Jepsen",
    avatar: ca
  }
]

const artist = {
  name: 'Taylor Swift',
  background: cover
}

const albums = [
  {
    name: "Repuation!",
    date: "23/07/2017",
    cover: rp,
    songs: [
      { name: "... Readry For It?", mv: true, added: false, liked: true, time: "3:28" },
      { name: "End Game", mv: true, added: false, liked: false, time: "4:04" },
      { name: "I Did Something Bad", mv: false, added: true, liked: true, time: "3:58" },
      { name: "Gorgeous", mv: false, added: true, liked: true, time: "3:28" }
    ]
  },
  {
    name: "1989",
    date: "06/06/2014",
    cover: a_hot,
    songs: [
      { name: "Welcome To New York", mv: false, added: true, liked: true, time: "3:32" },
      { name: "Blank Space", mv: true, added: true, liked: true, time: "3:51" },
      { name: "Bad Blood", mv: true, added: true, liked: true, time: "3:31" }
    ]
  },
  {
    name: "Red",
    date: "22/03/2012",
    cover: red,
    songs: [
      { name: "22", mv: true, added: true, liked: true, time: "3:52" },
      { name: "Red", mv: true, added: false, liked: true, time: "3:42" }
    ]
  },
  {
    name: "Speak Now",
    date: "03/04/2010",
    cover: sn,
    songs: [
      { name: "Mean", mv: true, added: true, liked: false, time: "3:58" }
    ]
  },
  {
    name: "Fearless",
    date: "20/01/2008",
    cover: fl,
    songs: [
      { name: "Love Story", mv: true, added: true, liked: false, time: "3:55" }
    ]
  },
  {
    name: "Taylor Swift",
    date: "23/06/2006",
    cover: ts,
    songs: [
      { name: "Tim McGraw", mv: false, added: false, liked: true, time: "3:52" }
    ]
  }
]

const songs = [
  {
    cover: s1,
    added: false,
    liked: false,
    id: 123455,
    name: 'Delicate',
    number: 323454651,
    time: 2.35
  },
  {
    cover: s2,
    added: false,
    liked: true,
    id: 123455,
    name: 'Shake It Off',
    number: 93425861,
    time: 4.35
  },
  {
    cover: s3,
    added: true,
    liked: false,
    id: 123455,
    name: 'I Don\'t Wanne Live Forever',
    number: 323454651,
    time: 3.45
  },
  {
    cover: s4,
    added: true,
    liked: true,
    id: 123455,
    name: '22',
    number: 323454651,
    time: 5.16
  }
]

class Account extends Component {
  state = {
    info: {
      name: 'Charley Chai',
      primuium: true,
      uid: 123456,
      avatar: 'hh',
    },
    which: 'overview',
    album: true
  }

  handlePlayClick = () => {
    this.setState({
      playing: !this.state.playing
    })
  }

  handleSelect = (tab, e) => {
    this.setState({
      which: tab
    });
  }

  handleBtnClick = (type, event) => {
    switch (type) {
      case 'liked':
        this.setState({
          liked: !this.state.liked
        });
        break;
      case 'added':
        this.setState({
          added: !this.state.added
        });
        break;
      case 'list':
        this.setState({
          album: !this.state.album
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="artist-main-view">
        <div className="artist-background" style={{ height: 250, overflow: "hidden" }}>
          <img alt="background" style={{ width: "100%" }} src={artist.background} />
        </div>
        <div className="artist-head-view">
          <div className="search">
            <input className="inputs" placeholder="Search" />
            <Icon className="iicon" type="search" />
          </div>
          <p className="artist-mark">ARTIST</p>
          <p className="artist-name">Taylor Swift</p>
          <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
            <div style={{ textAlign: "left", display: "flex"}}>
              <div style={{ textAlign: "left", margin: 10 }}>
                <Button className="artist-play-btn">PLAY</Button>
              </div>
              <div style={{ textAlign: "left", margin: 10 }}>
                <Button ghost={true} className="artist-follow">FOLLOWING</Button>
              </div>
              <div style={{ textAlign: "left", margin: 10 }}>
                <Button ghost={true} className="artist-more" shape="circle" icon="more" />
              </div>
            </div>
            <div style={{ textAlign: "right", margin: 10, float: "right" }}>
              <p className="artist-text">FOLLOERS</p>
              <p className="artist-text">{parseFloat(255357899).toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="artist-body-view" style={{ color: 'white', paddingLeft: 20, paddingRight: 20 }}>
          <div style={{ textAlign: "left", height: 40 }}>
            <span style={{ margin: 0, marginRight: 40 }}>
              <Button onClick={ this.handleSelect.bind(this, 'overview') }
                type="link" ghost={true}
                className={`menu-btn ${this.state.which === 'overview' ? 'menu-active' : ''}`}>
                Overview
              </Button>
            </span>
            <span style={{ margin: 0, marginRight: 40 }}>
              <Button onClick={this.handleSelect.bind(this, 'sa')}
                type="link" ghost={true}
                className={`menu-btn ${this.state.which === 'sa' ? 'menu-active' : ''}`}>
                Recommand
              </Button>
            </span>
            <span style={{ margin: 0, marginRight: 40 }}>
              <Button onClick={this.handleSelect.bind(this, 'about')}
                type="link" ghost={true}
                className={`menu-btn ${this.state.which === 'about' ? 'menu-active' : ''}`}>
                About
              </Button>
            </span>
            <span style={{ margin: 0, marginRight: 40 }}>
              <Button onClick={this.handleSelect.bind(this, 'concert')}
                type="link" ghost={true}
                className={`menu-btn ${this.state.which === 'concert' ? 'menu-active' : ''}`}>
                MV
              </Button>
            </span>
          </div>
          <div style={{ display: this.state.which === 'overview' ? '' : 'none' }}>
            <div className="artist-song-a" >
              <div>
                <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
                  <div>
                    <p className="part-title" style={{ textAlign: "left", marginTop: 10, marginBottom: 10, width: 240 }}>Hot Album</p>
                    <div style={{ textAlign: "left", display: "flex", alignItems: "center" }}>
                      <img alt="hot" height='120' width='120' style={{ borderRadius: 6 }} src={a_hot} />
                      <div style={{ marginLeft: 20 }}>
                        <p className="artist-desc-title">1989</p>
                        <p className="artist-desc-content">SOLD {parseFloat(255357899).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="part-title" style={{ textAlign: "left", marginTop: 10, marginBottom: 10, width: 240 }}>New Release</p>
                    <div style={{ textAlign: "left", display: "flex", alignItems: "center" }}>
                      <img alt="hot" height='120' width='120' style={{ borderRadius: 6 }} src={a_new} />
                      <div style={{ marginLeft: 20 }}>
                        <p className="artist-desc-title">ME!</p>
                        <p className="artist-desc-content">09/06/2019</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="part-title" style={{ textAlign: "left" , marginTop: 10, marginBottom: 10}}>Top Songs</p>
                {
                  songs.map((song, i) => {
                    return(
                      <div key={i}>
                        <div className="part-divide" style={{ margin: 0, marginLeft: 50 }} />
                        <div className="artist-song-block">
                          <img alt="cover" className="artist-song-img" src={song.cover} />
                          <p className="artist-song-text">#{i + 1}</p>
                          <Button onClick={this.handleBtnClick.bind(this, 'added')}
                            type="link" ghost={true} style={{ margin: 0, padding: 3, height: "20", border: 0 }}>
                            <Avatar shape="square" size={14} src={song.added ? added : add} />
                          </Button>
                          <Button onClick={this.handleBtnClick.bind(this, 'liked')}
                            type="link" ghost={true} style={{ margin: 0, padding: 3, height: "20", border: 0 }}>
                            <Avatar shape="square" size={14} src={song.liked ? liked : like} />
                          </Button>
                          <p className="artist-song-text" style={{ paddingLeft: 20 }}>{song.name}</p>
                          <p className="artist-song-text" >{parseFloat(song.number).toLocaleString()}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div style={{ marginLeft: 40 }}>
                <p className="part-title" style={{ textAlign: "left", marginTop: 10, marginBottom: 10 }}>
                  Recommand Singers
                </p>
                {
                  similar.map((a, i) => { // slice
                    return(
                      <div key={i} style={{ display: "flex", marginTop: 15, marginBottom: 15 }} >
                        <img alt="singer" className="aritist-sa" src={ a.avatar } />
                        <Button className="artist-sa-name" 
                          type="link" ghost={true}>
                          {a.name}                      
                        </Button>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
                <p className="part-title" style={{ textAlign: "left", marginTop: 10, marginBottom: 0 }}>
                  Albums
                </p>
                <div style={{ textAlign: "right", float: "right", margin: 0 }}>
                  <Button onClick={ this.handleBtnClick.bind(this, "list") }
                    type="link" ghost={true} className="artist-menu-btn">
                    <Icon style={{ fontSize: 20, color: !this.state.album ? "#09A97D" : "" }} type="bars" />
                  </Button>
                  <Button onClick={ this.handleBtnClick.bind(this, "list") }
                    type="link" ghost={true} className="artist-menu-btn">
                    <Icon style={{ fontSize: 20, color: this.state.album ? "#09A97D" : "" }} type="appstore" />
                  </Button>
                </div>
              </div>
              <div className="part-divide" style={{ margin: 0}} />
              <div className="artist-albums" style={{ display: this.state.album ? "" : "none" }}>
                {
                  albums.map((item, i) => {
                    return (
                      <div className="artist-album-block" key={i}>
                        <img alt='cover' height='180' width='180' style={{ borderRadius: 6 }} src={item.cover} />
                        <div style={{ marginTop: 5 }}>
                          <p className="name-show">{item.name}</p>
                          <p className="artist-date">{item.date}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div style={{ display: !this.state.album ? "" : "none" }}>
                {
                  albums.map((album, i) => {
                    return(
                      <div style={{ marginTop: 20, marginBottom: 20 }} key={i}>
                        <div style={{ textAlign: "left", display: "flex", alignItems: "flex-end", marginBottom: 20 }}>
                          <img alt="hot" height='140' width='140' style={{ borderRadius: 6 }} src={album.cover} />
                          <div style={{ marginLeft: 20 }}>
                            <p className="artist-album-date" >{ album.date }</p>
                            <p className="artist-album-name">{ album.name }</p>
                            <div style={{ textAlign: "left", display: "flex" }}>
                              <div style={{ textAlign: "left", margin: 0, marginRight: 20 }}>
                                <Button className="artist-play-btn">PLAY</Button>
                              </div>
                              <div style={{ textAlign: "left", margin: 0, marginRight: 20 }}>
                                <Button ghost={true} className="artist-save">SAVE</Button>
                              </div>
                              <div style={{ textAlign: "left", margin: 0, marginRight: 20 }}>
                                <Button ghost={true} className="artist-more" shape="circle" icon="more" />
                              </div>
                            </div>
                          </div>
                        </div>
                        {
                          album.songs.map((song, i) => {
                            return (
                              <div key={i}>
                                <div className="part-divide" style={{ margin: 0, marginLeft: 0 }} />
                                <div className="artist-album-song-block">
                                  <p className="artist-song-text">#{i + 1}</p>
                                  <Button onClick={this.handleBtnClick.bind(this, 'added')}
                                    type="link" ghost={true} style={{ margin: 0, padding: 3, height: "20", border: 0 }}>
                                    <Avatar shape="square" size={14} src={song.added ? added : add} />
                                  </Button>
                                  <Button onClick={this.handleBtnClick.bind(this, 'liked')}
                                    type="link" ghost={true} style={{ margin: 0, padding: 3, height: "20", border: 0 }}>
                                    <Avatar shape="square" size={14} src={song.liked ? liked : like} />
                                  </Button>
                                  <Button
                                    type="link" ghost={true} style={{ margin: 0, padding: 3, height: "20", border: 0 }}>
                                    <Avatar shape="square" size={14} src={song.mv ? mv1 : mv} style={{ opacity: song.mv ? 1 : 0.3 }} />
                                  </Button>
                                  <p className="artist-song-text" style={{ paddingLeft: 20 }}>{song.name}</p>
                                  <p className="artist-song-text" >{song.time}</p>
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div style={{ display: this.state.which === 'sa' ? '' : 'none' }}>
            Similar Artist
          </div>
          <div style={{ display: this.state.which === 'about' ? '' : 'none' }}>
            About
          </div>
          <div style={{ display: this.state.which === 'concert' ? '' : 'none' }}>
            Concerts
          </div>
        </div>
        <div style={{ height: 90 }} />
      </div>
    )
  }
}


export default Account;