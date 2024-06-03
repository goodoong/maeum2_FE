import React from 'react';
import CustomText from './CustomText';
import { Image, TouchableOpacity, View } from 'react-native';
import { moderateScale, scale, verticalScale } from '../../../utils/Scale';

const CustomBtn = ({
  onPress,
  title,
  size,
  color,
  rounded,
  borderWidth,
  borderColor,
  img,
}) => {
  const buttonStyle = {
    width:
      size === 'sm'
        ? moderateScale(182, 0.3)
        : size === 'md'
        ? moderateScale(279, 0.3)
        : size === 'lg'
        ? moderateScale(327, 0.3)
        : size === 'xs'
        ? moderateScale(100, 0.3)
        : moderateScale(68, 0.3),
    height: size === 'xs' ? moderateScale(34, 0.3) : moderateScale(48, 0.3),
    backgroundColor:
      color === 'buttonyellow'
        ? '#faae2b'
        : color === 'buttonpink'
        ? '#ffa8ba'
        : color === 'buttonwhite'
        ? '#ffffff'
        : color === 'buttonlight'
        ? '#F2F4F5'
        : '#00473e',
    borderRadius: rounded ? 48 : 5,
    borderWidth: borderWidth ? 2 : 0,
    borderColor:
      borderColor === 'lightgray'
        ? '#e3e5e5'
        : borderColor === 'yellow'
        ? '#FAAE2B'
        : borderColor === 'green'
        ? '#00473e'
        : '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scale(12),
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  };

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      {img && <Image source={img} />}
      <CustomText style="btntxt">{title}</CustomText>
    </TouchableOpacity>
  );
};

export default CustomBtn;
