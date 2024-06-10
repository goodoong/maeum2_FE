import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTempTurn } from '../redux/slice/TemplateTurn';
import useGameTurn from './useGameTurn';

const useGameSelectHandler = (navigation) => {
  const [stage, setStage] = useState('turnSelect');
  const [subtitleText, setSubtitleText] = useState("순서를 정해보자\n어떤 순서로 하고 싶어?");
  const [loading, setLoading] = useState(false);
  const [feelingData, setFeelingData] = useState('default');
  const [turnUpdated, setTurnUpdated] = useState(false);
  const dispatch = useDispatch();
  const { sendRequest, turn } = useGameTurn();
  const tempTurn = useSelector((state) => state.templateTurn.tempTurn);

  useEffect(() => {
    if (turnUpdated) {
      sendRequestWithTurn();
    }
  }, [turnUpdated, turn]);

  const sendRequestWithTurn = async () => {
    try {
      const response = await sendRequest(tempTurn);
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
      setTurnUpdated(false);
    }
  };

  const handleButtonPress = async (message, turnValue, title) => {
    if (loading) return;
    setLoading(true);
    if (turnValue) {
      dispatch(setTempTurn(turnValue));
      setTurnUpdated(true);
    } else {
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
