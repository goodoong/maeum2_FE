import React, {useEffect, useState} from 'react';
import BtnBox from '../../common/molecules/BtnBox';

// API 요청 로직 작성
// 음성 출력 로직 작성
const TurnSelect = () => {
  const buttons = [
    {
      size: 'lg',
      color: 'buttonyellow',
      rounded: false,
      title: '내가 문제 낼게 !',
    },
    {
      size: 'lg',
      color: 'buttonpink',
      rounded: false,
      title: '내가 맞춰 볼게 !',
    },
  ];

  return (
    <>
      <BtnBox buttons={buttons} />
    </>
  );
};

export default TurnSelect;
