import React from 'react';
import { removeItem } from './useAsyncStorage';


export const useLogout = async ({navigation}) => {
    await removeItem('token'); // token 값을 삭제합니다.  
    navigation.reset({
      index: 0,
      routes: [{ name: 'splash' }],
    });
  };
