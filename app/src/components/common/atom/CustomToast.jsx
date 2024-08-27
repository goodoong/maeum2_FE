import React, { useState, useEffect } from 'react';
import { View, Animated } from 'react-native';
import CustomText from './CustomText';
import { styled } from 'nativewind';
import { moderateScale, scale } from '../../../utils/Scale';

const ToastContainer = styled(Animated.View);

const CustomToast = ({ message, visible }) => {
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();

      setTimeout(() => {
        Animated.timing(opacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }, 5000); // 5초 후에 사라짐
    }
  }, [visible, opacity]);

  if (!visible) {
    return null;
  }

  return (
    <ToastContainer
    style={{
        opacity,
        bottom: moderateScale(50, 0.4),
        left: moderateScale(20, 0.4),
        right: moderateScale(20, 0.4),
        padding: scale(10)
      }}
      className="absolute rounded flex justify-center items-center bg-buttonpink"
    >
      <CustomText color="white" size="sm">
        {message}
      </CustomText>
    </ToastContainer>
  );
};

export default CustomToast;
