import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';
import GameTemplate from './GameTemplate';
import useTTS from '../../../hooks/useTTS';
import STTScreen from '../../../screens/STTScreen';
import useGameTurn from '../../../hooks/useGameTurn';
import useGameResult from '../../../hooks/useGameResult';
import CustomModal from '../../common/atom/CustomModal';

const GameRenderContent = ({ navigation }) => {
  const route = useRoute();
  const { message } = route.params;
  const [subtitle, setSubtitle] = useState('');
  const [feelingStatus, setFeelingStatus] = useState('default');
  const [initialMessageSpoken, setInitialMessageSpoken] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); 
  const [modalContent, setModalContent] = useState(''); 
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
        setModalContent('게임을 성공적으로 완료했습니다. 계속하시겠습니까?');
        setModalVisible(true); // 모달 보이기
      } else if (!isSolved && isEnd) {
        gameLoseMutation.mutate(); // 실패 API 호출
        setModalContent('게임이 실패했습니다. 계속하시겠습니까?');
        setModalVisible(true); // 모달 보이기
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

  const handleConfirm = () => {
    setModalVisible(false);
    navigation.reset({
      index: 0,
      routes: [{ name: 'selectscreen' }],
    });
  };

  const handleCancel = () => {
    setModalVisible(false);
    navigation.navigate('main');
  };

  const renderContent = () => (
    <STTScreen onSpeechResult={handleSpeechResult} />
  );

  return (
    <>
      <GameTemplate
        subtitleText={subtitle}
        loading={ttsLoading || mutation.isLoading}
        renderContent={renderContent}
        navigation={navigation}
        feelingData={ttsLoading || mutation.isLoading ? 'talkingmouth' : feelingStatus}
      />
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title="게임 종료"
        content={modalContent}
        confirmText="계속할래요"
        cancelText="그만할래요"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </>
  );
};

export default GameRenderContent;
