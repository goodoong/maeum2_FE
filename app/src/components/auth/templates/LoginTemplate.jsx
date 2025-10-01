import React from 'react';
import ScrollContainer from '../../common/atom/ScrollContainer';
import CustomTitle from '../../common/atom/CustomTitle';
import BtnBox from '../../common/molecules/BtnBox';
import Splash from '../../common/atom/Splash';
import { styled } from 'nativewind';

const Title = styled(CustomTitle)


const LoginTemplate = ({ navigation }) => {
  
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
     <ScrollContainer>
         <Title className="mt-10">마음의 창</Title>
         <Splash width={350} height={350}></Splash>
        <BtnBox buttons={buttons} />
      </ScrollContainer>
  );
};

export default LoginTemplate;
