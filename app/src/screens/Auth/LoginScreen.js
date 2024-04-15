import React, {useEffect} from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Box from '../../components/common/atom/Box';
import CustomText from '../../components/common/atom/CustomText';
import CustomTitle from '../../components/common/atom/CustomTitle';

const LoginScreen = ({route, navigation}) => {
  useEffect(() => {}, []);

  const moveAccountScreen = () => {
    navigation.navigate('account');
    console.log('연결댔다');
  };

  return (
    <TouchableOpacity onPress={moveAccountScreen}>
      <Box>
        <View className="items-center">
          <CustomTitle>마음의 창</CustomTitle>
          <CustomText>연동 페이지로 이동합니다.</CustomText>
        </View>
      </Box>
    </TouchableOpacity>
  );
};

export default LoginScreen;
