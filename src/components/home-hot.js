import React, { Component } from 'react';
import $ from 'jquery';

import playBtn from '../assets/icons/play-green.svg';
import pauseBtn from '../assets/icons/pause-green.svg';
import moreBtn from '../assets/icons/more-fill.svg';

import song1 from '../assets/debug/albums/song1.png';
import song2 from '../assets/debug/albums/song2.png';
import song3 from '../assets/debug/albums/song3.png';
import song4 from '../assets/debug/albums/song4.png';
import song5 from '../assets/debug/albums/song5.png';
import song6 from '../assets/debug/albums/song6.png';
import song7 from '../assets/debug/albums/song7.png';
import song8 from '../assets/debug/albums/song8.png';
import song9 from '../assets/debug/albums/song9.png';
import song10 from '../assets/debug/albums/song10.png';

import album1 from '../assets/debug/albums/album1.png';
import album2 from '../assets/debug/albums/album2.png';
import album3 from '../assets/debug/albums/album3.png';
import album4 from '../assets/debug/albums/album4.png';
import album5 from '../assets/debug/albums/album5.png';
import album6 from '../assets/debug/albums/album6.png';

import playlist1 from '../assets/debug/playlist/taylor.png';
import playlist2 from '../assets/debug/playlist/adele.png';
import playlist3 from '../assets/debug/playlist/gem.png';
import playlist4 from '../assets/debug/playlist/brandi.png';
import playlist5 from '../assets/debug/playlist/mix1.png';
import playlist6 from '../assets/debug/playlist/mix2.png';


import '../styles/home-hot.css';

class HomeHot extends Component {

  state = {
    songs: [
      [
        { song: 'shallow', artist: 'Lady Gaga', cover: song1 },
        { song: 'Bad Guy', artist: 'Billie Eilish', cover: song2 },
        { song: 'Dancing With A Stranger', artist: 'Sam Smith & Normani', cover: song3 }
      ],
      [
        { song: '7 Rings', artist: 'Ariana Grande', cover: song4 },
        { song: 'Sweet But Psycho', artist: 'Ava Max', cover: song5 },
        { song: 'Be Alright', artist: 'Dean Lewis', cover: song6 }
      ],
      [
        { song: 'Without Me', artist: 'Halsey', cover: song7 },
        { song: 'Happier', artist: 'Marshmello', cover: song8 },
        { song: 'Miss Me More', artist: 'Kelsea Ballerini', cover: song9 }
      ],
      [
        { song: 'Always Remember Us This Way', artist: 'Lady Gaga', cover: song1 },
        { song: '南海姑娘', artist: '王菲', cover: song10 },
        { song: 'Look What I Found', artist: 'Lady Gaga', cover: song1 }
      ]
    ],
    albums: [
      { name: 'Game of Thrones', artist: 'HBO', cover: album4 },
      { name: 'Apple Dream', artist: 'Tom Goose', cover: album3 },
      { name: 'A Star Is Born', artist: 'Lady Gaga', cover: album6 },
      { name: 'Polaris', artist: 'Alice Trump', cover: album1 },
      { name: '25', artist: 'Adele', cover: album5 },
      { name: 'DIDO', artist: 'Hello Word', cover: album2 }
    ],
    playlists: [
      { name: 'Taylor Swift Collection', artist: 'Taylor Swift', cover: playlist1 },
      { name: 'the Best of Adele', artist: 'Adele', cover: playlist2 },
      { name: '邓紫棋精选', artist: 'G.E.M.', cover: playlist3 },
      { name: 'the Story', artist: 'Brandi', cover: playlist4 },
      { name: 'Soft + Slow', artist: 'Polaris', cover: playlist5 },
      { name: 'Fresh & Chill', artist: 'Polaris', cover: playlist6 }
    ],
    playing: false,
    topSongs: [],
    topSongsToShow: [],
    topAlbumsToShow: [],
    topPlaylistToShow: []
  };

  componentWillMount(){
    $.ajax({
      url: "http://localhost:4000/top/song?type=96",
      xhrFields: {
        withCredentials: true
      },
      success: function (data) {
        // console.log(data)
      },
      error: function (err) {
        // console.log(err)
      }
    }).then((data) => {
      var songs = [];
      for (let i = 0; i < 4; i++) {
        songs[i] = [];
        for (let j = 0; j < 3; j++) {
          songs[i][j] = data.data[i*4+j];
        }
      }
      this.setState({
        topSongs: data.data,
        topSongsToShow: songs
      })
      console.log(songs)
    })

    $.ajax({
      url: "http://localhost:4000/top/album?offset=0&limit=10",
      xhrFields: {
        withCredentials: true
      },
      success: function (data) {
        // console.log(data)
      },
      error: function (err) {
        // console.log(err)
      }
    }).then((data) => {
      var albums = data.albums.slice(0, 10);
      this.setState({
        topAlbumsToShow: albums,
      })
      console.log(albums)
    })

    $.ajax({
      url: "http://localhost:4000/top/playlist?limit=10",
      xhrFields: {
        withCredentials: true
      },
      success: function (data) {
        // console.log(data)
      },
      error: function (err) {
        // console.log(err)
      }
    }).then((data) => {
      var playlists = data.playlists.slice(0, 10);
      this.setState({
        topPlaylistToShow: playlists,
      })
      console.log(playlists)
    })

    // 
  }

  handlePlayClick = (item) => {
    alert(item.name)
    this.props.onUpdate(item.mp3Url)
    this.setState({
      playing: !this.state.playing
    })
  }

  handleOpenAlbum = (item) => {
    alert(item.name)
  }

  handleOpenArtist = (item) => {
    alert(item.name)
  }

  handleMoreBtn = (item) => {
    alert(item.name)
  }

  handlePlay = (src) => {
    this.props.onUpdate(src)
  }

  render() {
    return(
      <div style={{ textAlign: 'left', padding: 20 }}>
        <div className="hot-songs">
          <p className="part-title">Hot Songs</p>
          <div className="part-divide"/>
          <div className="part-content">
            {
              this.state.topSongsToShow.map((item_stack, i) => {
                return (
                  <div key={i}>
                    {
                      item_stack.map((item, i) => {
                        return (
                          <div className="song-block" key={i}>
                            <img alt='cover' height='45' width='45' className="song-cover" src={ item.album.blurPicUrl } />
                            <img alt='btn' height='35' width='35' onClick={ this.handlePlayClick.bind(this, item) } className="cover-button" src={ this.state.playing ? pauseBtn : playBtn } />
                            <div className="song-show">
                              <p className="name-show" onClick={ this.handleOpenAlbum.bind(this, item) }>
                                {item.name.substr(0, 18) + (item.name.length > 18 ? '...' : '')}
                              </p>
                              <p onClick={ this.handleOpenArtist.bind(this, item) } className="sub-show">{item.artists[0].name}</p>
                            </div>
                            <img alt='more' onClick={this.handleMoreBtn.bind(this, item)} className="more-button" src={ moreBtn } />
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
        <div className="hot-albums" style={{ marginTop: 30 }}>
          <p className="part-title">Popular Albums</p>
          <div className="part-divide" />
          <div className="part-content">
            {
              this.state.topAlbumsToShow.map((item, i) => {
                return(
                  <div className="album-block" key={i}>
                    <img alt='cover' height='160' width='160' style={{ borderRadius: 6 }} src={ item.picUrl } />
                    <div style={{ marginTop: 5 }}>
                      <p className="name-show">{ item.name }</p>
                      <p className="sub-show">{ item.artist.name }</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="hot-artists" style={{ marginTop: 30 }}>
          <p className="part-title">Top Playlist</p>
          <div className="part-divide" />
          <div className="part-content">
            {
              this.state.topPlaylistToShow.map((item, i) => {
                return (
                  <div className="album-block" key={i}>
                    <img alt='cover' height='160' width='160' style={{ borderRadius: 6 }} src={item.coverImgUrl} />
                    <div style={{ marginTop: 5 }}>
                      <p className="name-show">{item.name}</p>
                      <p className="sub-show">{item.creator.nickname}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}


export default HomeHot;