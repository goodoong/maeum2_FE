import React from 'react';
import { Controller } from 'react-hook-form';
import CustomText from './CustomText';
import { SafeAreaView, TextInput, StyleSheet } from 'react-native';
import { moderateScale, scale } from '../../../utils/Scale';

const CustomInput = ({
  control,
  name,
  rules,
  placeholder,
  width,
  style,
  autoFocus,
  defaultValue,
  keyboardType,
  label,
}) => {
  const inputStyle = StyleSheet.flatten([
    styles.defaultInput,
    { width: moderateScale(width, 0.3) || moderateScale(327, 0.3) }
  ]);

  return (
    <SafeAreaView>
      {label && <CustomText size="sm" >{label}</CustomText>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[inputStyle, style]}
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            placeholder={placeholder}
            autoFocus={autoFocus}
            keyboardType={keyboardType}
          />
        )}
        name={name}
        rules={rules}
        defaultValue={defaultValue}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  defaultInput: {
    height: moderateScale(48, 0.3),
    borderWidth: 2,
    padding: scale(10),
    margin: scale(10),
    borderRadius: 8,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
});

export default CustomInput;
