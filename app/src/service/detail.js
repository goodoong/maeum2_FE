import { instance } from './instance';

export const detail = async (detail_id, access_token) => {
  try {
    const response = await instance.get('/api/chats/detail', {
      params: { detail_id },
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Accept': 'application/json, text/plain, */*',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching detail:', error);
    throw error;
  }
};