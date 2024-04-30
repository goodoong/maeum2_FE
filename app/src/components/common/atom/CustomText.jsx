import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {moderateScale} from '../../../utils/Scale';

const CustomText = ({children, size, color, style}) => {
  const customStyle = StyleSheet.flatten([
    styles.defaultText,
    size === 'sm' && styles.smallText,
    size === 'lg' && styles.largeText,
    color === 'btntxt' && {color: '#00332c'},
    color === 'darkgray' && {color: '#475d5b'},
    color === 'headline' && {color: '#00473e'},
    color === 'pink' && {color: '#ffa8ba'},
  ]);

  return <Text style={[customStyle, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: 'Jua-Regular',
    fontSize: moderateScale(18),
    color: '#090a0a',
  },
  smallText: {
    fontSize: moderateScale(16),
  },
  largeText: {
    fontSize: moderateScale(24),
  },
});

export default CustomText;
