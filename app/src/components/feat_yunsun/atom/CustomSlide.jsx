import React, { useRef } from 'react';
import { View } from 'react-native';
import CustomText from '../../common/atom/CustomText';
import CustomImage from '../../common/atom/CustomImgae';
import { styled } from 'nativewind';
import { scale, moderateScale,verticalScale } from '../../../utils/Scale';

const Slide= styled(View)

const CustomSlide = ({source, text}) => {
    return(
      <>    
      <Slide className="w-full items-center">
         <CustomImage source={source} width={300} height={450}/>
         <CustomText size='lg' color='headline'>{text}</CustomText>
      </Slide>
      </>
   ); 
};

     export default CustomSlide;