import {instance} from './instance';

export const testAPI = async () => {
  const response = await instance.get('/api/test');
  return response.data;
};

// 카카오에서 발급 받은 인가코드를 담아서 post
export const kakaoapi = async (code) => {
  try {
    const response = await instance.post('/api/login/kakao', { code });
    return response.data;
  } catch (error) {
    console.error('Error during Kakao login API call', error);
    throw error;
  }
};


// 휴대폰 번호 담아서 인증 요청 post 
export const smsrequestapi = async (phone_number) => {
  try {
    const response = await instance.post('/api/user/sms/send', { phone_number });
    return response.data;
  } catch (error) {
    console.error('Error during API call', error);
    throw error;
  }
};

// 인증 번호 담아서 post 
export const smscodeapi = async (data) => {
  try {
    const response = await instance.post('/api/user/sms/verification', data);
    return response.data;
  } catch (error) {
    console.error('Error during API call', error);
    throw error;
  }
};

// 회원가입 post
export const signup = async (data) => {
  try {
    const response = await instance.post('/api/user/signUp', data);
    return response.data;
  } catch (error) {
    console.error('Error during API call', error);
    throw error;
  }
};
