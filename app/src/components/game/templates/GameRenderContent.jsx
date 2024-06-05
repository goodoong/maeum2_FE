import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';
import GameTemplate from './GameTemplate';
import CustomText from '../../common/atom/CustomText';
import useTTS from '../../../hooks/useTTS';

const GameRenderContent = ({ navigation }) => {
  const route = useRoute();
  const { message } = route.params;
  const [subtitle, setSubtitle] = useState('');
  const { loading, handleTTS } = useTTS(); // useTTS 훅 사용

  useEffect(() => {
    if (message) {
      setSubtitle(message);
      handleTTS(message);
    }
  }, [message]);

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
