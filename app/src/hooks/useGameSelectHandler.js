import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTempTurn } from '../redux/slice/TemplateTurn';
import useGameTurn from './useGameTurn';

const useGameSelectHandler = (navigation) => {
  const [stage, setStage] = useState('turnSelect');
  const [subtitleText, setSubtitleText] = useState("순서를 정해보자\n어떤 순서로 하고 싶어?");
  const [loading, setLoading] = useState(false);
  const [feelingData, setFeelingData] = useState('default');
  const dispatch = useDispatch();
  const { sendRequest } = useGameTurn();
  const tempTurn = useSelector((state) => state.templateTurn.tempTurn);

  const handleButtonPress = async (message, turnValue, title) => {
    if (loading) return;
    setLoading(true);
    if (turnValue) {
      dispatch(setTempTurn(turnValue));
    }
    try {
      const response = await sendRequest(title);
      const receivedMessage = response.data.response[0].message;
      const feelingStatus = response.data.response[0].status;
      setSubtitleText(receivedMessage);
      setFeelingData(feelingStatus);
      setStage('subjectSelect');
    } catch (error) {
      console.error('Error handling turn selection:', error);
      setFeelingData('sad');
    } finally {
      setLoading(false);
    }
  };

  const handleSubjectPress = async (message) => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await sendRequest(message);
      const receivedMessage = response.data.response[0].message;
      const feelingStatus = response.data.response[0].status;
      setFeelingData(feelingStatus);
      navigation.navigate('gamescreen', { message: receivedMessage });
    } catch (error) {
      console.error('Error handling user input:', error);
      setFeelingData('sad');
    } finally {
      setLoading(false);
    }
  };

  return {
    stage,
    subtitleText,
    loading,
    handleButtonPress,
    handleSubjectPress,
    feelingData,
  };
};

export default useGameSelectHandler;
