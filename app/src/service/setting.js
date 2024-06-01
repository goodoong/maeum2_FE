import { instance } from "./instance";


export const mypage = async () => {
    const response = await instance.get('/api/myPage');
    return response.data;
};


// 설정 페이지 정보 get 
export const setting = async () => {
    const response = await instance.get('/api/setting');
    return response.data;
};

