import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styled } from 'nativewind';
import CharacterBody from '../atom/CharacterBody';
import DefaultEyes from '../atom/DefaultEyes';
import SadEyes from '../atom/SadEyes';
import DefaultMouth from '../atom/DefaultMouth';
import SadMouth from '../atom/SadMouth';
import HappyMouth from '../atom/HappyMouth';

const Character = ({ feelingdata }) => {

  const [feeling, setFeeling] = useState(null);

  useEffect(() => {
    // 모의 데이터를 직접 처리
    const feelingData = feelingdata;
    setFeeling(feelingData);

    if (feelingData === 'happy') {
      console.log('happy');
    } else if (feelingData === 'sad') {
      console.log('sad');
    }
  }, []);

//   useEffect(() => {
//     const feelingData = [
//       { key: 'feeling', data: 'sad' }
//     ];

//     const changeFeeling = () => {
//       feelingData[0].data = 'sad';
//       setFeeling(feelingData[0].data);
//       console.log(feelingData);
//     };

//     const timer = setTimeout(changeFeeling, 5000);
//     return () => clearTimeout(timer); // 타이머 클린업
//   }, []);

  useEffect(() => {
    if (feeling === 'happy') {
      console.log('happy');
    } else if (feeling === 'sad') {
      console.log('sad');
    }
  }, [feeling]);

  return (
   <>
        <CharacterBody width={500} height={500} />
        {/*표정*/}
        {feeling === 'default' && <DefaultEyes width={300} height={300} />}
        {feeling === 'default' && <DefaultMouth width={100} height={100} />}

        {feeling === 'happy' && <DefaultEyes width={300} height={300} />}
        {feeling === 'happy' && <HappyMouth width={100} height={100} />}

        {feeling === 'sad' && <SadEyes width={300} height={300} />}
        {feeling === 'sad' && <SadMouth width={200} height={200} />}
    </>
  );
};

export default Character;
