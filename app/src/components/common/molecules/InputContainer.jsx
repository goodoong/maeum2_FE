import React from 'react';
import {View} from 'react-native';
import CustomInput from '../atom/CustomInput';

const InputContainer = ({inputs, control}) => {
  return (
    <View>
      {inputs.map((input, index) => (
        <View
          key={index}
          className="w-full flex-row justify-center items-center">
          <CustomInput
            control={control}
            name={input.name}
            rules={input.rules}
            placeholder={input.placeholder}
            autoFocus={input.autoFocus}
            defaultValue={input.defaultValue}
          />
        </View>
      ))}
    </View>
  );
};

export default InputContainer;
