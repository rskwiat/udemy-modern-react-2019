import axios from 'axios';
const KEY = 'AIzaSyC1n99KJMOIIZhH8xgG36_HeWgXAn_vrq0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
