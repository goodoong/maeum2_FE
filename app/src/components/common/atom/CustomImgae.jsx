import React from 'react';
import { Image } from 'react-native';
import { verticalScale, moderateScale } from '../../../utils/Scale';
import { styled } from 'nativewind';

const MyImage = styled(Image)

const CustomImage = ({ source, width, height }) => {
    return (
     <MyImage className="overflow-visible" source={source} style={{ width: moderateScale(width), height: verticalScale(height) }} />
    );
}

export default CustomImage;
