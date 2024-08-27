import {instance} from './instance';

export const mainapi = async () => {
  const response = await instance.get('/api/home');
  return response.data;
};
