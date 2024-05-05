import React from 'react';
import {Controller} from 'react-hook-form';
import {SafeAreaView, TextInput} from 'react-native';
import {moderateScale, scale} from '../../../utils/Scale';

const CustomInput = ({
  control,
  name,
  rules,
  placeholder,
  width,
  style,
  autoFocus,
  defaultValue,
}) => {
  const inputStyle = {
    width: moderateScale(width, 0.3) || moderateScale(327, 0.3),
    height: moderateScale(48, 0.3),
    marginBottom: scale(12),
    borderWidth: 2,
    padding: scale(10),
    borderRadius: 8,
  };

  return (
    <SafeAreaView>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={[inputStyle, style]}
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            placeholder={placeholder}
            autoFocus={autoFocus}
          />
        )}
        name={name}
        rules={rules}
        defaultValue={defaultValue}
      />
    </SafeAreaView>
  );
};

export default CustomInput;
