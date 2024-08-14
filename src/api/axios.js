import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://kpcowell.site/api/v1',
  // baseURL: 'http://localhost/api/v1',
  timeout: 20000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
