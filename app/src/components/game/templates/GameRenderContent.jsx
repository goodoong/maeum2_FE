import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';
import GameTemplate from './GameTemplate';
import useTTS from '../../../hooks/useTTS';
import STTScreen from '../../../screens/STTScreen';
import useGameTurn from '../../../hooks/useGameTurn';
import useGameResult from '../../../hooks/useGameResult';
import useModal from '../../../hooks/useModal';
import { useSelector } from 'react-redux';

const GameRenderContent = ({ navigation }) => {
  const route = useRoute();
  const { message } = route.params;
  const [subtitle, setSubtitle] = useState('');
  const [feelingStatus, setFeelingStatus] = useState('default');
  const [initialMessageSpoken, setInitialMessageSpoken] = useState(false);
  const [chance, setChance] = useState(5);
  const { showModal, hideModal, ModalComponent } = useModal(); // Use useModal hook
  const { loading: ttsLoading, handleTTS } = useTTS();
  const { sendRequest } = useGameTurn(); 
  const { gameWinMutation, gameLoseMutation, gameAIMutation} = useGameResult();
  const turn = useSelector((state) => state.templateTurn.tempTurn);

  useEffect(() => {
    if (message && !initialMessageSpoken) {
      setSubtitle(message.replace(/:/g, '!'));
      handleTTS(message.replace(/:/g, '!'));
      setInitialMessageSpoken(true);
    }
  }, [message, initialMessageSpoken, handleTTS]);

  const mutation = useMutation({
    mutationFn: sendRequest,
    onSuccess: (response) => {
      const receivedMessage = response.data.response[0].message;
      const receivedStatus = response.data.response[0].status;
      const chance = response.data.response[0].chance;
      const isSolved = response.data.response[0].is_solved;
      const isEnd = response.data.response[0].is_end;
      
      setChance(chance);
      setSubtitle(receivedMessage.replace(/:/g, '!'));
      setFeelingStatus(receivedStatus);
      handleTTS(receivedMessage.replace(/:/g, '!'));

      if(isEnd) {
        if (isSolved && turn === 'childturn') {
          gameWinMutation.mutate();
          showModal({
            title: '게임 종료',
            content: '게임이 종료되었어요! 계속하시겠습니까?',
            confirmText: '계속할래요',
            cancelText: '그만할래요',
            onConfirm: handleConfirm,
            onCancel: handleCancel,
          });
        } else if (!isSolved && turn === 'childturn') {
          gameLoseMutation.mutate();
          showModal({
            title: '게임 종료',
            content: '게임이 종료되었어요! 계속하시겠습니까?',
            confirmText: '계속할래요',
            cancelText: '그만할래요',
            onConfirm: handleConfirm,
            onCancel: handleCancel,
          });
        } else if(turn === 'AIturn') {
          gameAIMutation.mutate();
          showModal({
            title: '게임 종료',
            content: '게임이 종료되었어요! 계속하시겠습니까?',
            confirmText: '계속할래요',
            cancelText: '그만할래요',
            onConfirm: handleConfirm,
            onCancel: handleCancel,
          });
        }else if(turn === 'snack') {
          showModal({
            title: '게임 종료',
            content: '게임이 종료되었어요!',
            confirmText: '홈으로 이동하기',
           
            onConfirm: handleCancel,
           
            singleButton: true,  // 취소 버튼을 숨기기 위해 true로 설정
          });
        }
      }
     
    },
    onError: (error) => {
      console.error('Error sending request:', error);
      setFeelingStatus('sad');
    },
  });

  const handleSpeechResult = (spokenText) => {
    setSubtitle(spokenText.replace(/:/g, '!'));
    mutation.mutate(spokenText.replace(/:/g, '!'));
  };

  const handleConfirm = () => {
    hideModal();
    navigation.reset({
      index: 0,
      routes: [{ name: 'selectscreen' }],
    });
  };

  const handleCancel = () => {
    hideModal();
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
        chance={chance}
      />
      <ModalComponent />
    </>
  );
};

export default GameRenderContent;
