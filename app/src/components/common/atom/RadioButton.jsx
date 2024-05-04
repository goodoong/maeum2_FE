import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import CustomText from './CustomText';

const RadioButton = ({ options, onChange, initialValue }) => {
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    setSelectedOption(initialValue);
  }, [initialValue]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {options.map((option, index) => (
        <TouchableOpacity key={index} onPress={() => handleOptionChange(option)}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
            <View
              style={{
                width: 24,
                height: 24,
                borderRadius: 12,
                borderWidth: 2,
                marginRight: 8,
                borderColor: selectedOption === option ? 'blue' : 'black',
              }}
            />
            <CustomText>{option}</CustomText>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RadioButton;
