import { instance } from './instance';

export const detail = async (detailid) => {
  try {
    const response = await instance.get('/api/chats/detail',{detailid});
    return response.data;
  } catch (error) {
    console.error('Error fetching detail:', error);
    throw error;  // 에러를 호출한 쪽에서 처리할 수 있도록 다시 던집니다.
  }
};
