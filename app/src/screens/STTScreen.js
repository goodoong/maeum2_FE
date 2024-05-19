import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import Voice from '@react-native-voice/voice';


const STTScreen = () => {
  const [isRecord, setIsRecord] = useState(false);
  const [text, setText] = useState('');
  const buttonLabel = isRecord ? 'Stop' : 'Start';
  const voiceLabel = text
    ? text
    : isRecord
    ? 'Say something...'
    : 'Press Start button';
    

  const _onSpeechStart = () => {
    console.log('onSpeechStart');
    setText('');
  };

  const _onSpeechEnd = () => {
    console.log('onSpeechEnd');
  };

  const _onSpeechResults = (event) => {
    console.log('onSpeechResults');
    const spokenText = event.value[0];
    console.log('Recognized text:', spokenText); // 인식된 텍스트를 콘솔에 출력
    setText(spokenText);
  };

  const _onSpeechError = (event) => {
    console.log('_onSpeechError');
    console.log(event.error);
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
    <View style={styles.container}>
      <Text style={styles.voiceText}>{voiceLabel}</Text>
      <Button onPress={_onRecordVoice} title={buttonLabel} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  voiceText: {
    margin: 32,
  },
});

export default STTScreen;