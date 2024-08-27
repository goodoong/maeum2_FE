import React from "react";
import LottieView from "lottie-react-native";
import { moderateScale } from "../../../utils/Scale";
import { View } from "react-native";
import { styled } from "nativewind";

const Box = styled(View)

const HappyMouth = ({ width, height, loop, onAnimationFinish }) => {
    return (
     <Box className="w-full flex jusify-center items-center" style={{position:'absolute', top: moderateScale(145, 0), left:moderateScale(18,0.3)}}>
        <LottieView
            style={{
                width: moderateScale(width,0.3),
                height: moderateScale(height, 0.1),
            }}
            source={require('../../../assets/lottie/happy_mouth.json')}
            autoPlay
            loop={loop}
            onAnimationFinish={onAnimationFinish}
        />
    </Box>
    );
};
export default HappyMouth;

//w:100 H:100