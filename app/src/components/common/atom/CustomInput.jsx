import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';
import {
  moderateScale,
  scale,
  verticalScale,
} from '../../../utils/Scale';

const CustomInput = ({ keyboardType, placeholder }) => {
  const [text, onChangeText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const inputStyle = {
    width: moderateScale(327),
    height: verticalScale(48),
    margin: scale(12),
    borderWidth: 2,
    padding: scale(10),
    borderRadius: 8,
    borderColor: isFocused ? '#faae2b' : '#E3E5E5'
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <SafeAreaView>
      <TextInput
        style={inputStyle}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
        onFocus={handleFocus} 
        onBlur={handleBlur}
        keyboardType={keyboardType}//"numeric" // props로 isNumber값을 받고 여부에 따라 숫자 키패드 표시
      />
    </SafeAreaView>
  );
};

export default CustomInput;
