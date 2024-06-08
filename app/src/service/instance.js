import axios from 'axios';
import { getItem } from '../hooks/useAsyncStorage';

export const instance = axios.create({
  baseURL: 'http://54.234.82.206:8080',
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

instance.interceptors.request.use(
  async config => {
    console.log('[API REQUEST]', config);

    const token = await getItem('token');
    if (token) {
      config.headers['Authorization'] = `${token}`;
    } else {
      console.log('요청에 토큰이 담기지 않았습니다.');
    }

    return config;
  },
  error => {
    console.log(`[API REQUEST ERROR] ${error}`);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    console.log('[API RESPONSE]', response);
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);
