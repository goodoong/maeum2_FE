import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import CustomText from './CustomText';
import {styled} from 'nativewind';
import {scale, moderateScale} from '../../../utils/Scale';

const ButtonGroup = styled(View);
const SingleButtonSet = styled(View);
const SingleButton = styled(View);

const RadioButton = ({options, onChange, initialValue}) => {
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    setSelectedOption(initialValue);
  }, [initialValue]);

  const handleOptionChange = option => {
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <ButtonGroup className="flex flex-row items-center space-x-20">
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleOptionChange(option)}>
          <SingleButtonSet className="flex flex-row items-center">
            <SingleButton
              className="rounded-xl border-2 border-buttonyellow"
              style={{
                width: moderateScale(24, 0.4),
                height: moderateScale(24, 0.4),
                marginRight: scale(8),
                backgroundColor: selectedOption === option ? '#faae2b' : null,
              }}
            />
            <CustomText>{option}</CustomText>
          </SingleButtonSet>
        </TouchableOpacity>
      ))}
    </ButtonGroup>
  );
};

export default RadioButton;
