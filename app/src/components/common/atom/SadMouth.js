import React from "react";
import LottieView from "lottie-react-native";
import { moderateScale } from "../../../utils/Scale";
import { View } from "react-native";
import { styled } from "nativewind";

const Box = styled(View)

const SadMouth = ({ width, height, loop, onAnimationFinish }) => {
    return (
     <Box className="w-full flex jusify-center items-center" style={{position:'absolute', top: moderateScale(120, -0.1), left:moderateScale(55,0.1)}}>
        <LottieView
            style={{
                width: moderateScale(width,0.1),
                height: moderateScale(height, 0.2),
            }}
            source={require('../../../assets/lottie/sad_mouth.json')}
            autoPlay
            loop={loop}
            onAnimationFinish={onAnimationFinish}
        />
    </Box>
    );
};
export default SadMouth;

//200 200