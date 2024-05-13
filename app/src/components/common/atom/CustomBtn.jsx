import React from 'react';
import CustomText from './CustomText';
import {Image, TouchableOpacity} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../../utils/Scale';

const CustomBtn = ({onPress, title, size, color, rounded, borderWidth, borderColor, img}) => {

  
  const buttonStyle = {
    width:
      size === 'sm'
        ? moderateScale(182,0.3)
        : size === 'md'
        ? moderateScale(279,0.3)
        : size === 'lg'
        ? moderateScale(327,0.3)
        : moderateScale(68,0.3),
    height: size === 'xs' ? moderateScale(34,0.3) : moderateScale(48,0.3),
    backgroundColor:
      color === 'buttonyellow'
        ? '#faae2b'
        : color === 'buttonpink'
        ? '#ffa8ba'
        : color === 'buttonwhite'
        ? '#ffffff'
        : '#00473e',
    borderRadius: rounded ? 48 : 0,
    borderWidth: borderWidth ? 1 :0,
    borderColor: borderColor ? '#e3e5e5': '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop : scale(12),
    flexDirection: 'row'

  };


  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
  
      <Image source={img}/><CustomText style="btntxt">{title}</CustomText>

    </TouchableOpacity>
  );
};

export default CustomBtn;
