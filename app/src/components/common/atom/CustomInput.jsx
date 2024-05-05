import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../../utils/Scale';

const CustomInput = ({
  keyboardType,
  placeholder,
  width,
  style,
  value,
  autoFocus,
}) => {
  const [text, onChangeText] = useState(value);
  const [isFocused, setIsFocused] = useState(false);

  const inputStyle = {
    width: moderateScale(width, 0.3) || moderateScale(327, 0.3),
    height: moderateScale(48, 0.3),
    marginBottom: scale(12),
    borderWidth: 2,
    padding: scale(10),
    borderRadius: 8,
    borderColor: isFocused ? '#faae2b' : '#E3E5E5',
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
        style={[inputStyle, style]} // Merge custom style with passed style
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        keyboardType={keyboardType}
        autoFocus={autoFocus}
      />
    </SafeAreaView>
  );
};

export default CustomInput;
