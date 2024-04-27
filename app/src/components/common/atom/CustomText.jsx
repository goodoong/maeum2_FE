import React from 'react';
import {Text} from 'react-native';
import {moderateScale} from '../../../utils/Scale';

const CustomText = ({children, size, color}) => {
  const customStyle = {
    fontFamily: 'Jua-Regular',
    fontSize:
      size === 'sm'
        ? moderateScale(16)
        : size === 'lg'
        ? moderateScale(24)
        : moderateScale(18),
    color:
      color === 'btntxt'
        ? '#00332c'
        : color === 'darkgray'
        ? '#475d5b'
        : color === 'headline'
        ? '#00473e'
        : '#090a0a',
  };

  return <Text style={customStyle}>{children}</Text>;
};

export default CustomText;
