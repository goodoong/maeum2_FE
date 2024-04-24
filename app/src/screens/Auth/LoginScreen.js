import React from 'react';
import useMoveNavigation from '../../hooks/useMoveNavigation';
import Container from '../../components/common/atom/Container';
import CustomTitle from '../../components/common/atom/CustomTitle';
import BtnBox from '../../components/common/molecules/BtnBox';
import CustomInput from '../../components/common/atom/CustomInput';


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
      <BtnBox buttons={buttons} />
      <CustomInput/>
    </Container>
  );
};

export default LoginScreen;
