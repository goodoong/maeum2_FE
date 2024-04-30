import React from 'react';
import Container from '../../components/common/atom/Container';
import CustomTitle from '../../components/common/atom/CustomTitle';
import BtnBox from '../../components/common/molecules/BtnBox';
import Splash from '../../components/common/atom/Splash';


const LoginScreen = ({ navigation }) => {
  
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
      <CustomTitle>마음의 창</CustomTitle>
      <Splash width={350} height={350}></Splash>
      <BtnBox buttons={buttons} />
    </Container>
  );
};

export default LoginScreen;
