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
  const { sendRequest } = useGameTurn();
  const tempTurn = useSelector((state) => state.templateTurn.tempTurn);

  const handleButtonPress = async (message, turnValue, title) => {
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
