import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost/api/v1',
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
