import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';
import GameTemplate from './GameTemplate';
import CustomText from '../../common/atom/CustomText';
import { fetchTTS,playSound } from '../../../service/tts';

const GameRenderContent = ({ navigation }) => {
  const route = useRoute();
  const { message } = route.params;
  const [subtitle, setSubtitle] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (message) {
      setSubtitle(message);
      handleTTS(message);
    }
  }, [message]);

  const handleTTS = async text => {
    setLoading(true);
    try {
      const filePath = await fetchTTS(text);
      playSound(filePath);
    } catch (error) {
      console.error('TTS 처리 오류:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => (
    <View>
      <CustomText>게임으로 넘어옴</CustomText>
      <Button title="재생" onPress={() => handleTTS(subtitle)} />
    </View>
  );

  return (
    <GameTemplate
      subtitleText={subtitle}
      loading={loading}
      renderContent={renderContent}
      navigation={navigation}
    />
  );
};

export default GameRenderContent;
