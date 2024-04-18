import React from 'react';
import CustomText from './CustomText';
import {TouchableOpacity} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../../utils/Scale';

const CustomBtn = ({onPress, title, size, color, rounded}) => {

  
  const buttonStyle = {
    width:
      size === 'sm'
        ? moderateScale(182)
        : size === 'md'
        ? moderateScale(279)
        : size === 'lg'
        ? moderateScale(327)
        : moderateScale(68),
    height: size === 'xs' ? verticalScale(34) : verticalScale(48),
    backgroundColor:
      color === 'buttonyellow'
        ? '#faae2b'
        : color === 'buttonpink'
        ? '#ffa8ba'
        : '#00473e',
    borderRadius: rounded ? 48 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop : scale(12)
  };

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <CustomText style="btntxt">{title}</CustomText>
    </TouchableOpacity>
  );
};

export default CustomBtn;
