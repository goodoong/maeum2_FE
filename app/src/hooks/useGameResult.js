import { useMutation } from '@tanstack/react-query';
import { gamewin, gamelose, gameAIdone } from '../service/game';

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

  const gameAIMutation = useMutation({
    mutationFn: gameAIdone,
    onSuccess: (data) => {
      console.log('Game AI response:', data);
    },
    onError: (error) => {
      console.error('Error on game AI done:', error);
    },
    
  });

  return {
    gameWinMutation,
    gameLoseMutation,
    gameAIMutation,
  };
};

export default useGameResult;
