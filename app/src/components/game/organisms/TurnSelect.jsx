import React from 'react';
import BtnBox from '../../common/molecules/BtnBox';

const TurnSelect = ({ onButtonPress }) => {
  const buttons = [
    {
      size: 'lg',
      color: 'buttonyellow',
      rounded: false,
      title: '내가 문제 낼게 !',
      onPress: () => onButtonPress("좋아 ! 마음이가 생각하는 단어를 \n내가 맞춰볼게", 'AIturn'),
    },
    {
      size: 'lg',
      color: 'buttonpink',
      rounded: false,
      title: '내가 맞춰 볼게 !',
      onPress: () => onButtonPress("좋아 ! 내가 생각하는 단어를 \n마음이가 맞춰봐", 'childturn'),
    },
  ];

  return (
    <>
      <BtnBox buttons={buttons} />
    </>
  );
};

export default TurnSelect;
