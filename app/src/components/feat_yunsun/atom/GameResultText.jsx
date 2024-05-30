import React from 'react';
import { Text } from 'react-native';
import { View} from 'react-native';
import { moderateScale, scale } from '../../../utils/Scale';

const GameResultText = ({title, size, color, rounded}) => {

  const gamebuttonStyle = {
    width: moderateScale(96,0.3),
    height: moderateScale(34,0.3),
    backgroundColor:
      color === 'green'
        ? '#F2F7F5'
        : color === 'pink'
        ? '#FFE5EB'
        :'#FFFFFF',
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop : scale(20),
    flexDirection: 'row'
  };

  const gametextStyle = {
    color:
      color === 'green'
        ? '#00473E'
        : color === 'pink'
        ? '#FF4E72'
        :'#090A0A',
        fontFamily: 'Jua-Regular',
        fontSize: moderateScale(18),
  };
  return (
    <View style={gamebuttonStyle}>
      <Text style={gametextStyle}>{title}</Text>
    </View>
  );
};

export default GameResultText;
