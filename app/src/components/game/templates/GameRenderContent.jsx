import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';
import GameTemplate from './GameTemplate';
import useTTS from '../../../hooks/useTTS';
import STTScreen from '../../../screens/STTScreen';
import useGameTurn from '../../../hooks/useGameTurn';

const GameRenderContent = ({ navigation }) => {
  const route = useRoute();
  const { message } = route.params;
  const [subtitle, setSubtitle] = useState('');
  const [feelingStatus, setFeelingStatus] = useState('default'); 
  const [initialMessageSpoken, setInitialMessageSpoken] = useState(false);
  const { loading, handleTTS } = useTTS();
  const { sendRequest } = useGameTurn();

  useEffect(() => {
    if (message && !initialMessageSpoken) {
      setSubtitle(message);
      handleTTS(message);
      setInitialMessageSpoken(true);
    }
  }, [message, initialMessageSpoken, handleTTS]);

  useEffect(() => {
    if (loading) {
      setFeelingStatus('talkingmouth');
    } else {
      setFeelingStatus('default');
    }
  }, [loading]);

  const mutation = useMutation({
    mutationFn: sendRequest,
    onSuccess: (response) => {
      const receivedMessage = response.data.response[0].message;
      const feelingStatus = response.data.response[0].status; 
      console.log(feelingStatus);
      setFeelingStatus(feelingStatus); 
      setSubtitle(receivedMessage);
      handleTTS(receivedMessage);
    },
    onError: (error) => {
      console.error('Error sending request:', error);
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
      loading={loading || mutation.isLoading}
      renderContent={renderContent}
      navigation={navigation}
      feelingData={feelingStatus} 
    />
  );
};

export default GameRenderContent;
