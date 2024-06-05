import React from "react";
import LottieView from "lottie-react-native";
import { moderateScale } from "../../../utils/Scale";
import { View } from "react-native";
import { styled } from "nativewind";

const Box = styled(View)

const SadEyes = ({ width, height, loop, onAnimationFinish }) => {
    return (
     <Box className="w-full flex jusify-center items-center" style={{position:'absolute', top: moderateScale(70, -0.1), left:moderateScale(45, 0.1)}}> 
        <LottieView
            style={{
                width: moderateScale(width,0.1),
                height: moderateScale(height, 0.1),
            }}
            source={require('../../../assets/lottie/sad_eyes.json')}
            autoPlay
            loop={loop}
            onAnimationFinish={onAnimationFinish}
        />
    </Box>
    );
};
export default SadEyes;
//300 300