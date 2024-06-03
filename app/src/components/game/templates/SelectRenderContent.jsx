import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TurnSelect from '../organisms/TurnSelect';
import SubjectSelect from '../organisms/SubjectSelect';
import useGameTurn from '../../../hooks/useGameTurn';
import { setTempTurn } from '../../../redux/slice/TemplateTurn';
import GameTemplate from './GameTemplate';

const SelectRenderContent = ({navigation}) => {
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
    setLoading(true);
    if (turnValue) {
      dispatch(setTempTurn(turnValue));
    }
  };

  const handleSubjectPress = async (message) => {
    setSubtitleText(message);
    setUserInput(message);
    setLoading(true);
  };

  useEffect(() => {
    const sendRequestIfNeeded = async () => {
      if (loading && userInput) {
        await new Promise(resolve => setTimeout(resolve, 500)); 
        try {
          const response = await sendRequest(userInput);
          console.log('Response:', response);
          if (stage === 'turnSelect') {
            setStage('subjectSelect'); // 주제 선택 화면으로 전환
            setSubtitleText("주제를 정해보자\n어떤 주제로 하고 싶어?");
          } else if (stage === 'subjectSelect') {
            // Handle the response for subject select
            console.log('Subject selected and request sent');
          }
        } catch (error) {
          console.error('Error handling user input:', error);
        }
        setLoading(false);
      }
    };

    sendRequestIfNeeded();
  }, [tempTurn, loading, userInput, stage, sendRequest]);

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
    />
  );
};

export default SelectRenderContent;
