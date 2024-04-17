import React from 'react';
import {Text} from 'react-native';
import {moderateScale} from '../../../utils/Scale';

const CustomTitle = ({children}) => {
  const customStyle = {
    fontFamily: 'Jua-Regular',
    fontSize: moderateScale(36),
    color: '#00473e',
  };

  return <Text style={customStyle}>{children}</Text>;
};

export default CustomTitle;
