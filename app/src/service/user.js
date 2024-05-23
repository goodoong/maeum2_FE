import {instance} from './instance';

export const testAPI = async () => {
  const response = await instance.get('/api/test');
  return response.data;
};

// 카카오에서 발급 받은 인가코드를 담아서 post
export const kakaoapi = async () => {
  const response = await instance.post('/api/login/kakao');
  return response.data;
};
