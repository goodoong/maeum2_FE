import React, { useEffect, useState } from 'react';
import { View, Dimensions } from 'react-native';
import CharacterBody from '../atom/CharacterBody';
import DefaultEyes from '../atom/DefaultEyes';
import SadEyes from '../atom/SadEyes';
import DefaultMouth from '../atom/DefaultMouth';
import SadMouth from '../atom/SadMouth';
import HappyMouth from '../atom/HappyMouth';
import TalkingMouth from '../atom/TalkingMouth';
import { moderateScale } from '../../../utils/Scale';

const Character = ({ feelingdata }) => {
  const [feeling, setFeeling] = useState(null);

  useEffect(() => {
    setFeeling(feelingdata);

    if (feelingdata === 'happy') {
      console.log('happy');
    } else if (feelingdata === 'sad') {
      console.log('sad');
    }
  }, [feelingdata]);

  const { width } = Dimensions.get('window');
  const isTablet = width > 768;
  const bodyWidth = 500;
  const bodyHeight = isTablet ? moderateScale(150, 0.3) : moderateScale(500, 0.3);

  return (
    <>
      <CharacterBody width={bodyWidth} height={bodyHeight} />
      {feeling === 'default' && <DefaultEyes width={300} height={300} />}
      {feeling === 'default' && <DefaultMouth width={100} height={100} />}

      {feeling === 'happy' && <DefaultEyes width={300} height={300} />}
      {feeling === 'happy' && <HappyMouth width={200} height={120} />}

      {feeling === 'sad' && <SadEyes width={300} height={300} />}
      {feeling === 'sad' && <SadMouth width={200} height={200} />}

      {feeling === 'talkingmouth' && <DefaultEyes width={300} height={300} />}
      {feeling === 'talkingmouth' && <TalkingMouth width={100} height={100} />}
    </>
  );
};

export default Character;
