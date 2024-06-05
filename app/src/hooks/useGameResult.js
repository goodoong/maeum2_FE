import { useMutation } from '@tanstack/react-query';
import { gamewin, gamelose } from '../service/game';

const useGameResult = () => {
  const gameWinMutation = useMutation({
    mutationFn: gamewin,
    onSuccess: (data) => {
      console.log('Game win response:', data);
    },
    onError: (error) => {
      console.error('Error on game win:', error);
    },
  });

  const gameLoseMutation = useMutation({
    mutationFn: gamelose,
    onSuccess: (data) => {
      console.log('Game lose response:', data);
    },
    onError: (error) => {
      console.error('Error on game lose:', error);
    },
  });

  return {
    gameWinMutation,
    gameLoseMutation,
  };
};

export default useGameResult;
