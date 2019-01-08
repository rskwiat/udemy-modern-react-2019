import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'A Song', duration: '4:05'},
    { title: 'All Star', duration: '3:15'},
    { title: 'A Pop Song', duration: '2:05'},
    { title: 'A Latin Song', duration: '5:05'},
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});