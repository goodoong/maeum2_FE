import React from 'react';
import BtnBox from '../../common/molecules/BtnBox';

const SubjectSelect = ({ onButtonPress }) => {
  const buttons = [
    {
      size: 'lg',
      color: 'buttonyellow',
      rounded: false,
      title: '동물',
      onPress: () => onButtonPress("동물을 주제로 게임을 시작할게!"),
    },
    {
      size: 'lg',
      color: 'buttonpink',
      rounded: false,
      title: '사물',
      onPress: () => onButtonPress("사물을 주제로 게임을 시작할게!"),
    },
    {
      size: 'lg',
      color: 'buttonyellow',
      rounded: false,
      title: '음식',
      onPress: () => onButtonPress("음식을 주제로 게임을 시작할게!"),
    },
  ];

  return (
    <>
      <BtnBox buttons={buttons} />
    </>
  );
};

export default SubjectSelect;
