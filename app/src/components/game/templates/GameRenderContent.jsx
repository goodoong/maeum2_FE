import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';
import GameTemplate from './GameTemplate';
import useTTS from '../../../hooks/useTTS';
import STTScreen from '../../../screens/STTScreen';
import useGameTurn from '../../../hooks/useGameTurn';
import useGameResult from '../../../hooks/useGameResult';


const GameRenderContent = ({ navigation }) => {
  const route = useRoute();
  const { message } = route.params;
  const [subtitle, setSubtitle] = useState('');
  const [feelingStatus, setFeelingStatus] = useState('default');
  const [initialMessageSpoken, setInitialMessageSpoken] = useState(false);
  const { loading: ttsLoading, handleTTS } = useTTS();
  const { sendRequest } = useGameTurn(); 
  const { gameWinMutation, gameLoseMutation } = useGameResult();

  useEffect(() => {
    if (message && !initialMessageSpoken) {
      setSubtitle(message);
      handleTTS(message);
      setInitialMessageSpoken(true);
    }
  }, [message, initialMessageSpoken, handleTTS]);

  const mutation = useMutation({
    mutationFn: sendRequest,
    onSuccess: (response) => {
      const receivedMessage = response.data.response[0].message;
      const receivedStatus = response.data.response[0].status;
      const isSolved = response.data.response[0].is_solved;
      const isEnd = response.data.response[0].is_end;
      
      setSubtitle(receivedMessage);
      setFeelingStatus(receivedStatus);
      handleTTS(receivedMessage);

      if (isSolved && isEnd) {
        gameWinMutation.mutate(); // 성공 API 호출
      } else if (!isSolved && isEnd) {
        gameLoseMutation.mutate(); // 실패 API 호출
      }
    },
    onError: (error) => {
      console.error('Error sending request:', error);
      setFeelingStatus('sad');
    },
  });

  const handleSpeechResult = (spokenText) => {
    setSubtitle(spokenText);
    mutation.mutate(spokenText);
  };

  const renderContent = () => (
    <STTScreen onSpeechResult={handleSpeechResult} />
  );

  return (
    <GameTemplate
      subtitleText={subtitle}
      loading={ttsLoading || mutation.isLoading}
      renderContent={renderContent}
      navigation={navigation}
      feelingData={ttsLoading || mutation.isLoading ? 'talkingmouth' : feelingStatus}
    />
  );
};

export default GameRenderContent;
