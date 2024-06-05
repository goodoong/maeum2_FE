import React from "react";
import LottieView from "lottie-react-native";
import { moderateScale } from "../../../utils/Scale";
import { View } from "react-native";
import { styled } from "nativewind";

const Box = styled(View)

const DefaultMouth = ({ width, height, loop, onAnimationFinish }) => {
    return (
     <Box className="w-full flex jusify-center items-center" style={{position:'absolute', top: moderateScale(150, 0), left:moderateScale(13, 0.3)}}>
        <LottieView
            style={{
                width: moderateScale(width,0.1),
                height: moderateScale(height, 0.1),
            }}
            source={require('../../../assets/lottie/default_mouth.json')}
            autoPlay
            loop={loop}
            onAnimationFinish={onAnimationFinish}
        />
    </Box>
    );
};
export default DefaultMouth;

//w:100 H:100