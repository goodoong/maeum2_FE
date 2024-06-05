import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTempTurn } from '../redux/slice/TemplateTurn';
import useGameTurn from './useGameTurn';
import useTTS from './useTTS';

const useGameSelectHandler = (navigation) => {
  const [stage, setStage] = useState('turnSelect');
  const [subtitleText, setSubtitleText] = useState("순서를 정해보자\n어떤 순서로 하고 싶어?");
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch();
  const { sendRequest } = useGameTurn();
  const tempTurn = useSelector((state) => state.templateTurn.tempTurn);
  const { loading: ttsLoading } = useTTS();

  const handleButtonPress = async (message, turnValue, title) => {
    if (loading || ttsLoading) return; // 로딩 중이면 실행 안함
    setLoading(true);
    setUserInput(title);
    if (turnValue) {
      dispatch(setTempTurn(turnValue));
    }
    try {
      const response = await sendRequest(title);
      setSubtitleText(response.data.response[0].message);
      setStage('subjectSelect'); // 주제 선택 화면으로 전환
    } catch (error) {
      console.error('Error handling turn selection:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubjectPress = async (message) => {
    if (loading || ttsLoading) return; // 로딩 중이면 실행 안함
    setLoading(true);
    setUserInput(message);

    // 주제 선택 버튼을 눌렀을 때만 요청을 보냅니다.
    try {
      const response = await sendRequest(message);
      console.log('Response:', response);
      setLoading(false);
      navigation.navigate('gamescreen', { message: response.data.response[0].message });
    } catch (error) {
      console.error('Error handling user input:', error);
      setLoading(false);
    }
  };

  return {
    stage,
    subtitleText,
    loading,
    handleButtonPress,
    handleSubjectPress,
  };
};

export default useGameSelectHandler;
