import { instance } from './instance';

export const chat = async ({ pageParam = 0 }) => {
  try {
    const response = await instance.get(`/api/chats?page=${pageParam}`);
    if (response.data.success) {
      return response.data.response;
    } else {
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    console.error('Error fetching chat data:', error);
    throw error;
  }
};

