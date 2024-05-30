import { instance } from "./instance";


export const mypage = async () => {
    const response = await instance.get('/api/myPage');
    return response.data;
  };