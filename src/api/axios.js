import axios from 'axios';

const axios = axios.create({
  baseURL: 'https://kpcowell.site/api/v1',
  timeout: 20000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axios;
