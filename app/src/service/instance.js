import axios from 'axios';
import { Alert } from 'react-native';
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
    if (error.response) {
      const errorCode = error.response.status;
      const errorMessage = error.response.data
        ? error.response.data.message
        : error.message;

      switch (errorCode) {
        case 400:
          Alert.alert('인터넷 오류', `400(Bad Request) 잘못된 요청입니다. ${errorMessage}`);
          break;
        case 401:
          Alert.alert('인터넷 오류', `401(Unauthorized) 인증되지 않은 사용자입니다. ${errorMessage}`);
          break;
        case 403:
          Alert.alert('인터넷 오류', `403(Forbidden): ${errorMessage}`);
          break;
        case 404:
          Alert.alert('인터넷 오류', `404(Not Found) 주소를 찾을 수 없습니다. ${errorMessage}`);
          break;
        case 500:
          Alert.alert('인터넷 오류', `500(Internal Server Error) 서버에 연결 할 수 없습니다. ${errorMessage}`);
          break;
        default:
          Alert.alert('인터넷 오류', `${errorCode}: ${errorMessage}`);
      }
    } else if (error.request) {
      Alert.alert('인터넷 오류', 'No response received from the server.');
    } else {
      Alert.alert('인터넷 오류', error.message);
    }
    return Promise.reject(error);
  },
);
