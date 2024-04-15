import React from 'react';
import {Text} from 'react-native';

const CustomTitle = ({children}) => {
  const customStyle = {
    fontFamily: 'Jua-Regular',
    fontSize: 36,
    color: '#00473E',
  };

  return <Text style={customStyle}>{children}</Text>;
};

export default CustomTitle;
