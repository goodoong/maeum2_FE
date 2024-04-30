import React, { useRef } from 'react';
import { View } from 'react-native';
import CustomText from '../atom/CustomText';
import CustomImage from '../atom/CustomImgae';
import { styled } from 'nativewind';

const StyledView = styled(View)
const Slide = ({source, text}) => {
    return(
     <View>
      <StyledView className="h-full flex-col items-center space-y-14">
         <CustomImage source={source} width={300} height={400}/>
         <CustomText size='lg' color='headline'>{text}</CustomText>
      </StyledView> 
     </View>
   ); 
};

     export default Slide;