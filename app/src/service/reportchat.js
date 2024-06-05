import { instance } from './instance';

export const detail = async (detail_id) => {
  try {
    const response = await instance.get('/api/chats/detail', {
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching detail:', error);
    throw error;
  }
};
