import axios from 'axios';
import { getItem, setItem } from '../hooks/useAsyncStorage'; 

export const instance = axios.create({
  baseURL: 'http://3.38.190.45:8080',
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
  async response => {
    console.log('[API RESPONSE]', response);
    
    const token = response.headers['authorization'];
    if (token) {
      await setItem('token', token); 
    }
    
    return response;
  },
  error => {
    console.log(`[API RESPONSE ERROR] ${error}`);
    return Promise.reject(error);
  },
);
