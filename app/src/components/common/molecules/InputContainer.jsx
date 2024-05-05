import React from 'react';
import { View } from 'react-native';
import CustomInput from '../atom/CustomInput';
import { styled } from 'nativewind';

const InputGroup = styled(View)

const InputContainer = ({ inputs, control, register }) => {
  return (
    <InputGroup className='flex flex-row space-y-6'>
      {inputs.map((input, index) => (
          <InputGroup className='flex flex-row'
          key={index}>
          <CustomInput
            control={control}
            name={input.name}
            rules={input.rules}
            placeholder={input.placeholder}
            autoFocus={input.autoFocus}
            defaultValue={input.defaultValue}
            register={register} // register를 전달해줍니다.
          />
        </InputGroup>
      ))}
    </InputGroup>
  );
};

export default InputContainer;
