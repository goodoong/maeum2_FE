import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TurnSelect from '../organisms/TurnSelect';
import SubjectSelect from '../organisms/SubjectSelect';
import useGameTurn from '../../../hooks/useGameTurn';
import { setTempTurn } from '../../../redux/slice/TemplateTurn';
import GameTemplate from './GameTemplate';

const SelectRenderContent = ({ navigation }) => {
  const [stage, setStage] = useState('turnSelect');
  const [subtitleText, setSubtitleText] = useState("순서를 정해보자\n어떤 순서로 하고 싶어?");
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch();
  const { sendRequest, turn } = useGameTurn();
  const tempTurn = useSelector((state) => state.templateTurn.tempTurn);

  const handleButtonPress = async (message, turnValue, title) => {
    setSubtitleText(message);
    setUserInput(title);
    if (turnValue) {
      dispatch(setTempTurn(turnValue));
    }
    setStage('subjectSelect'); // 주제 선택 화면으로 전환
    setSubtitleText("주제를 정해보자\n어떤 주제로 하고 싶어?");
  };

  const handleSubjectPress = async (message) => {
    setSubtitleText(message);
    setUserInput(message);
    setLoading(true);
  };

  const sendRequestIfNeeded = useCallback(async () => {
    if (loading && userInput && stage === 'subjectSelect') {
      await new Promise(resolve => setTimeout(resolve, 500));
      try {
        const response = await sendRequest(userInput);
        console.log('Response:', response);
        setLoading(false);
        navigation.navigate('gamescreen', { message: response.data.response[0].message });
      } catch (error) {
        console.error('Error handling user input:', error);
        setLoading(false);
      }
    }
  }, [loading, userInput, stage, sendRequest, navigation]);

  useEffect(() => {
    sendRequestIfNeeded();
  }, [sendRequestIfNeeded]);

  const renderContent = () => {
    if (stage === 'turnSelect') {
      return <TurnSelect onButtonPress={handleButtonPress} />;
    }
    if (stage === 'subjectSelect') {
      return <SubjectSelect onButtonPress={handleSubjectPress} />;
    }
  };

  return (
    <GameTemplate
      subtitleText={subtitleText}
      loading={loading}
      renderContent={renderContent}
      navigation={navigation}
    />
  );
};

export default SelectRenderContent;
