import React from 'react';
import {Text} from 'react-native';

const CustomText = ({children}) => {
  const customStyle = {
    fontFamily: 'Jua-Regular',
    fontSize: 18,
  };

  return <Text style={customStyle}>{children}</Text>;
};

export default CustomText;
