import { instance } from './instance';


export const detail = async (detail_id) => {
  try {
    const response = await instance.post('/api/chats/detail', { detail_id});
    return response.data;
  } catch (error) {
    console.error('Error during API call', error);
    throw error;
  }
};
