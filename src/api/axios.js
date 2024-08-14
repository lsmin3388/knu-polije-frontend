import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://kpcowell/api/v1',
  timeout: 20000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
