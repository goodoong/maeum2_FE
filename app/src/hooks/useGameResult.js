import { useMutation } from '@tanstack/react-query';
import { gamewin,gamelose } from '../service/game';
import { Alert } from 'react-native'; 

const useGameResult = () => {
  const gameWinMutation = useMutation({
    mutationFn: gamewin,
    onSuccess: (data) => {
      console.log('Game win response:', data);
      Alert.alert('게임 종료', '게임을 성공적으로 완료했습니다.');
    },
    onError: (error) => {
      console.error('Error on game win:', error);
      Alert.alert('에러', '게임 승리 처리 중 오류가 발생했습니다.');
    },
  });

  const gameLoseMutation = useMutation({
    mutationFn: gamelose,
    onSuccess: (data) => {
      console.log('Game lose response:', data);
      Alert.alert('게임 종료', '게임이 실패했습니다.');
    },
    onError: (error) => {
      console.error('Error on game lose:', error);
      Alert.alert('에러', '게임 실패 처리 중 오류가 발생했습니다.');
    },
  });

  return {
    gameWinMutation,
    gameLoseMutation,
  };
};

export default useGameResult;
