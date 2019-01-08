import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    const {
      songs,
      selectSong,
    } = this.props;

    return songs.map((song, i) => {
      return (
        <div className="item" key={`${song.title}-${i}`}>
          <div className="right floated content">
            <button 
              onClick={() => selectSong(song)}
              className="ui button primary"
            >
              Select
            </button>
          </div>

          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui divided list">{this.renderList()}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.songs
  };
};

export default connect(mapStateToProps, { selectSong })(SongList);