import React from 'react';
import { connect } from 'react-redux';


const SongDetail = ({ song }) => {

  if (!song) {
    return <div>Select a song</div>
  }

  return (
    <div>
      <h3>Details For</h3>
      <h4>{song.title}</h4>
      <p>{song.duration}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong
  }
}

export default connect(mapStateToProps)(SongDetail);