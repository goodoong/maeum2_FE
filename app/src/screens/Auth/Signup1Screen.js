import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Signup1Screen = ({route, navigation}) => {
  useEffect(() => {}, []);

  const moveAuthorizationScreen = () => {
    navigation.push('authorization');
  };

  return (
    <View>
      <TouchableOpacity onPress={moveAuthorizationScreen}>
        <Text>전화번호 인증 페이지로 이동합니다.</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Signup1Screen;
