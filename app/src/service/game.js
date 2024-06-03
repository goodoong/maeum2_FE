import { instance } from "./instance";


// 아이가 맞출 때 
export const childturn = async (user_input) => {
    try {
      const response = await instance.post('/api/main/gpt1', user_input);
      return response;
    } catch (error) {
      console.error('Error during API call', error);
      throw error;
    }
  };

// AI가 맞출 때 
export const AIturn = async (user_input) => {
    try {
      const response = await instance.post('/api/main/gpt2', user_input);
      return response;
    } catch (error) {
      console.error('Error during API call', error);
      throw error;
    }
  };


// 게임 종료 할 때 
export const gamequit = async () => {
  const response = await instance.get('/api/main/quit');
  return response.data;
};