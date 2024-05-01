import React, { useRef } from 'react';
import { View } from 'react-native';
import CustomText from '../../common/atom/CustomText';
import CustomImage from '../../common/atom/CustomImgae';
import { styled } from 'nativewind';

const Slide= styled(View)
const CustomSlide = ({source, text}) => {
    return(
      <Slide className="size-full object-contain space-y-4">
         <CustomImage source={source} width={300} height={400}/>
         <CustomText size='lg' color='headline'>{text}</CustomText>
      </Slide> 
   ); 
};

     export default CustomSlide;