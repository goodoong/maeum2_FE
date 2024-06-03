import { instance } from "./instance";


export const mypage = async () => {
    const response = await instance.get('/api/myPage');
    return response.data;
};


export const mypagefix = async (data) => {
    try {
      const response = await instance.post('/api/user/info', data);
      return response;
    } catch (error) {
      console.error('Error during API call', error);
      throw error;
    }
  };

// 설정 페이지 정보 get 
export const setting = async () => {
    const response = await instance.get('/api/setting');
    return response.data;
};

