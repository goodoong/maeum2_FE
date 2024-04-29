import React from 'react';
import { Image } from 'react-native';
import { verticalScale, moderateScale, scale } from '../../../utils/Scale';
import { styled } from 'nativewind';

const MyImage = styled(Image)

const CustomImage = ({ source, width, height }) => {
    return (
     <MyImage className="overflow-visible" source={source} style={{ width: moderateScale(width, 0.5), height: moderateScale(height,0.7) }} />
    );
}

export default CustomImage;
