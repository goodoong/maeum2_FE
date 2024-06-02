// import { instance } from "./instance";

// export const chat = async () => {
//     const response = await instance.get('/api/chats');
//     return response.data;
// };

import { instance } from './instance';

export const chat = async (page) => {
  try {
    const response = await instance.get(`/api/chats?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('[API CALL ERROR]', error);
    throw error;
  }
};
