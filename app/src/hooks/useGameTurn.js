import { useSelector } from 'react-redux';
import { childturn, AIturn, snackgame} from '../service/game';

const useGameTurn = () => {
  const turn = useSelector((state) => state.templateTurn.tempTurn);

  const sendRequest = async (user_input) => {
    if (turn === 'AIturn') {
      return await AIturn({ user_input });
    }
    if (turn === 'childturn') {
      return await childturn({ user_input });
    }  
    if (turn === 'snack') {
      return await snackgame({ user_input });
    }
    throw new Error('Turn value is not set or is invalid');
  };

  return { sendRequest, turn };
};

export default useGameTurn;
