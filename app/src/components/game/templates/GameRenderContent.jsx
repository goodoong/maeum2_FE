import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import GameTemplate from './GameTemplate';
import CustomText from '../../common/atom/CustomText';

const GameRenderContent = ({ navigation }) => {
  const route = useRoute();
  const { message } = route.params;
  const [subtitle, setSubtitle] = useState('');

  useEffect(() => {
    if (message) {
      setSubtitle(message);
    }
  }, [message]);

  const renderContent = () => (
    <CustomText>게임으로 넘어옴</CustomText>
  );

  return (
    <GameTemplate
      subtitleText={subtitle}
      loading={false}
      renderContent={renderContent}
      navigation={navigation}
    />
  );
};

export default GameRenderContent;
