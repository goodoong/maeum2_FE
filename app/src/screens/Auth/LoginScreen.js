import React from 'react';
import Container from '../../components/common/atom/Container';
import CustomTitle from '../../components/common/atom/CustomTitle';
import BtnBox from '../../components/common/molecules/BtnBox';
import { styled } from 'nativewind';
import { View } from 'react-native';
import { scale } from '../../utils/Scale';

const StyledView = styled(View)
const LoginScreen = ({ route, navigation }) => {
  
  const moveAccountScreen = (screen) => {
    navigation.push(screen);
}
 

  const buttons = [
    {
      onPress: () => moveAccountScreen('account'),
      size: 'sm',
      color: 'buttonyellow',
      rounded: true,
      title: '회원 가입',
    },
    {
      onPress: () => moveAccountScreen('account'),
      size: 'sm',
      color: 'buttonpink',
      rounded: true,
      title: '로그인',
    }
  ];
  

  return (
    <Container>
      <StyledView className="h-full flex-col items-center" style={{ marginTop: scale(50) }}>
      <CustomTitle>마음의 창</CustomTitle>
      </StyledView>
      {/*사진*/}
      <BtnBox buttons={buttons} />
    </Container>
  );
};

export default LoginScreen;
