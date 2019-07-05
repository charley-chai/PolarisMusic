import React, { Component } from 'react';
import { Avatar, Button, Progress } from 'antd';

import '../styles/player.css';
import album from '../assets/shallow.png';
import shuffle from '../assets/icons/shuffle-line.svg';
import shuffleTrue from '../assets/icons/shuffle-true.svg';
import skipBack from '../assets/icons/skip-back-fill.svg';
import skipForward from '../assets/icons/skip-forward-fill.svg';
import playBtn from '../assets/icons/play.svg';
import pauseBtn from '../assets/icons/pause.svg';
import repeat from '../assets/icons/repeat-one-fill.svg';
import repeatTrue from '../assets/icons/repeat-true.svg';
import repeatPL from '../assets/icons/repeat-playlist.svg';
import device from '../assets/icons/device-line.svg';
import playlist from '../assets/icons/play-list-line.svg';
import volumn from '../assets/icons/volume-up-line.svg';
import like from '../assets/icons/heart-line.svg';
import liked from '../assets/icons/heart-fill.svg';
import add from '../assets/icons/add.svg';
import added from '../assets/icons/added.svg';

const currentPlay = {
  album: "A star is born",
  name: "Shallow",
  process: 0.5,
  songer: "Lady Gaga",
  time: 3.5,
  liked: false
};

const { ipcRenderer } = window.require('electron');

class Player extends Component {
  state = {
    album: "A star is born",
    name: "Shallow",
    process: 0.5,
    songer: "Lady Gaga",
    time: 3.5,
    liked: false,
    added: false,
    playing: false,
    shuffle: false,
    repeat: 0
  }

  componentDidMount() {
    ipcRenderer.send('update', this.state);
    ipcRenderer.on('main-liked', (event, arg) => {
      if (typeof (arg) === 'boolean') {
        this.setState({
          liked: arg
        })
      }
    });
    ipcRenderer.on('main-added', (event, arg) => {
      if (typeof (arg) === 'boolean') {
        this.setState({
          added: arg
        })
      }
    });
    ipcRenderer.on('main-playing', (event, arg) => {
      if (typeof (arg) === 'boolean') {
        this.setState({
          playing: arg
        })
      }
      if (!arg) {
        document.getElementById('player').pause();
      } else {
        document.getElementById('player').play();
      }
    });
    ipcRenderer.on('main-shuffle', (event, arg) => {
      if (typeof (arg) === 'boolean') {
        this.setState({
          shuffle: arg
        })
      }
    });
    ipcRenderer.on('main-repeat', (event, arg) => {
      if (typeof (arg) === 'number') {
        this.setState({
          repeat: arg
        })
      }
    });
    ipcRenderer.on('main-skipBack', (event, arg) => {
      console.log('skip back');
    });
    ipcRenderer.on('main-skipForward', (event, arg) => {
      console.log('skip forward')
    });
    ipcRenderer.on('main-goBack', (event, arg) => {
      console.log('go back')
    });
    ipcRenderer.on('main-goAhead', (event, arg) => {
      console.log('go ahead')
    });
  }

  handleBtnClick = (type, event) => {
    switch (type) {
      case 'liked':
        this.setState({
          liked: !this.state.liked
        });
        ipcRenderer.send('liked', !this.state.liked);
        break;
      case 'added':
        this.setState({
          added: !this.state.added
        });
        ipcRenderer.send('added', !this.state.added);
        break;
      case 'playing':
        this.setState({
          playing: !this.state.playing
        });
        if (this.state.playing){ // no update
          document.getElementById('player').pause();
        } else {
          document.getElementById('player').play();
        }
        ipcRenderer.send('playing', !this.state.playing);
        break;
      case 'repeat':
        this.setState({
          repeat: (this.state.repeat + 1) % 3
        });
        ipcRenderer.send('repeat', (this.state.repeat + 1) % 3);
        break;
      case 'shuffle':
        this.setState({
          shuffle: !this.state.shuffle
        });
        ipcRenderer.send('shuffle', !this.state.shuffle);
        break;    
      default:
        break;
    }
  }

  render() {
    return (
      <div className="player">
        <div style={{ margin: 10 }}>
          <Avatar shape="square" size={ 50 } src={ album } />
        </div>
        <div className="playing-info">
          <Button type="link" ghost={true} style={{ margin: 0, padding: 0, height: "auto", border: 0 }}>
            <p style={{ margin: 0, fontSize: 17 }}>{currentPlay.name}</p>
          </Button>
          <Button type="link" ghost={true} style={{ margin: 0, padding: 0, height: "auto", border: 0 }}>
            <p style={{ fontWeight: "bold", margin: 0, fontSize: 12, textDecoration: "underline" }}>{currentPlay.songer}</p>
          </Button>
        </div>
        <div id="play-button">
          <Button onClick={ this.handleBtnClick.bind(this, 'added') } 
            type="link" ghost={true} style={{ margin: 10, padding: 0, height: "auto", border: 0 }}>
            <Avatar shape="square" size={16} src={this.state.added ? added : add} />
          </Button>
          <Button onClick={ this.handleBtnClick.bind(this, 'liked') }
            type="link" ghost={true} style={{ margin: 10, padding: 0, height: "auto", border: 0 }}>
            <Avatar shape="square" size={16} src={ this.state.liked ? liked : like} />
          </Button>
        </div>
        <div>
          <div style={{ textAlign: 'center', marginTop: 5}}>
            <Button onClick={ this.handleBtnClick.bind(this, 'shuffle') }
              type="link" ghost={true} style={{ margin: 10, padding: 0, height: "auto", border: 0 }}>
              <Avatar shape="square" size={16} src={ this.state.shuffle ? shuffleTrue : shuffle } />
            </Button>
            <Button 
            type="link" ghost={true} style={{ margin: 10, padding: 0, height: "auto", border: 0 }}>
              <Avatar shape="square" size={20} src={skipBack} />
            </Button>
            <Button onClick={ this.handleBtnClick.bind(this, 'playing') }
              type="link" ghost={true} style={{ marginLeft: 10, marginRight: 10, marginTop: 0 , padding: 0, height: "auto", border: 0 }}>
              <Avatar shape="square" size={30} src={ this.state.playing ? pauseBtn : playBtn} />
            </Button>
            <Button 
              type="link" ghost={true} style={{ margin: 10, padding: 0, height: "auto", border: 0 }}>
              <Avatar shape="square" size={20} src={ skipForward } />
            </Button>
            <Button onClick={this.handleBtnClick.bind(this, 'repeat')}
              type="link" ghost={true} style={{ margin: 10, padding: 0, height: "auto", border: 0 }}>
              <Avatar shape="square" size={16} src={ this.state.repeat === 0 ? repeat : (this.state.repeat === 1 ? repeatTrue : repeatPL)} />
            </Button>
          </div>
          <Progress percent={30} className="progress"/>
        </div>
        <div className="rightPart">
          <div>
            <Button type="link" ghost={true} style={{ margin: 10, padding: 0, height: "auto", border: 0 }}>
              <Avatar shape="square" size={16} src={device} />
            </Button>
            <Button type="link" ghost={true} style={{ margin: 10, padding: 0, height: "auto", border: 0 }}>
              <Avatar shape="square" size={16} src={playlist} />
            </Button>
            <Button type="link" ghost={true} style={{ margin: 10, padding: 0, height: "auto", border: 0 }}>
              <Avatar shape="square" size={16} src={volumn} />
            </Button>
          </div>
          <div>
            <Progress percent={30} />
          </div>
        </div>
        <audio id="player"
          controls={ this.state.playing } >
          <source src={ this.props.src  } type="audio/mp3" />
        </audio>
      </div>
    )
  }
}


export default Player;