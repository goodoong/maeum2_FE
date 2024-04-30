import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { moderateScale } from '../../../utils/Scale';

const CustomTitle = ({ children, color, style }) => {
  const customStyle = StyleSheet.flatten([
    styles.defaultTitle,
    color === 'pink' && { color: '#ffa8ba' },
    color !== 'pink' && { color: '#00473e' },
  ]);

  return <Text style={[customStyle, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  defaultTitle: {
    fontFamily: 'Jua-Regular',
    fontSize: moderateScale(36),
  },
});

export default CustomTitle;
