import { instance } from "./instance";


// AI가 맞출 때 "내가 문제 낼게" 
export const AIturn = async (user_input) => {
  try {
    const response = await instance.post('/api/main/gpt2', user_input);
    return response;
  } catch (error) {
    console.error('Error during API call', error);
    throw error;
  }
};

// 아이가 맞출 때 "내가 맞춰 볼게"
export const childturn = async (user_input) => {
    try {
      const response = await instance.post('/api/main/gpt1', user_input);
      return response;
    } catch (error) {
      console.error('Error during API call', error);
      throw error;
    }
  };

// 아이가 맞출 때 "내가 맞춰 볼게"
export const snackgame = async (user_input) => {
  try {
    const response = await instance.post('/api/main/gpt3', user_input);
    return response;
  } catch (error) {
    console.error('Error during API call', error);
    throw error;
  }
};


// 게임이 종료 되었을 때 (아이)
export const gamewin = async () => {
    const response = await instance.get('/api/main/solve');
    return response.data;
 };

 export const gamelose = async () => {
  const response = await instance.get('/api/main/wrong');
  return response.data;
};

// 게임이 종료 되었을 때 (AI)

export const gameAIdone = async () => {
  const response = await instance.get('/api/main/ai');
  return response.data;
};


// 게임 중간에 그만 둘 때 

export const gamequit = async () => {
  const response = await instance.get('/api/main/quit');
  return response.data;
};