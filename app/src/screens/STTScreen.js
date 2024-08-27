import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Voice from '@react-native-voice/voice';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomText from '../components/common/atom/CustomText';
import { styled } from 'nativewind';


const STTScreen = ({ onSpeechResult }) => {
  const [isRecord, setIsRecord] = useState(false);
  const [text, setText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const MICBtn = styled(View);
  const MIC = styled(TouchableOpacity)


  const _onSpeechStart = () => {
    console.log('onSpeechStart');
    setText('');
    setErrorMessage('');
  };

  const _onSpeechEnd = () => {
    console.log('onSpeechEnd');
  };

  const _onSpeechResults = (event) => {
    console.log('onSpeechResults');
    const spokenText = event.value[0];
    console.log('Recognized text:', spokenText);
    setText(spokenText);
    if (onSpeechResult) {
      onSpeechResult(spokenText);
    }
  };

  const _onSpeechError = (event) => {
    console.log('_onSpeechError');
    console.log(event.error);
    setErrorMessage('음성인식을 중지하고 다시 시도해주세요.');
    setIsRecord(false);
  };

  const _onRecordVoice = () => {
    if (isRecord) {
      Voice.stop();
    } else {
      Voice.start('ko-KR');
    }
    setIsRecord(!isRecord);
  };

  useEffect(() => {
    Voice.onSpeechStart = _onSpeechStart;
    Voice.onSpeechEnd = _onSpeechEnd;
    Voice.onSpeechResults = _onSpeechResults;
    Voice.onSpeechError = _onSpeechError;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  return (
    <MICBtn className='flex-1 justify-center items-center'>
      {errorMessage ? <CustomText size="sm" color="red">{errorMessage}</CustomText> : null}
      <MIC
        className='items-center justify-center w-20 h-20 rounded-full bg-gray-200 shadow-lg'
        onPress={_onRecordVoice}
      >
        <Icon name="mic" size={50} color={isRecord ? 'red' : 'black'} />
      </MIC>
    </MICBtn>
  );
};

export default STTScreen;
