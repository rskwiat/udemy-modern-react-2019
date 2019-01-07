import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 386226078f6283839c093ee80f6467ded9e450c90d6c5d2670270bd569476145'
  }
});
