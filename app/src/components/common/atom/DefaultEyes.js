import React from "react";
import LottieView from "lottie-react-native";
import { height, moderateScale, scale, verticalScale, width } from "../../../utils/Scale";
import { View } from "react-native";
import { styled } from "nativewind";

const Box = styled(View)

const DefaultEyes = ({width, height, loop, onAnimationFinish }) => {
    return (
     <Box className="w-full flex jusify-center items-center" style={{position:'absolute', top: moderateScale(55, -0.2), left:moderateScale(52, 0.15)}}>
        <LottieView
            style={{
                width: moderateScale(width,0.4),
                height: moderateScale(height, 0.1),
            }}
            source={require('../../../assets/lottie/default_eyes.json')}
            autoPlay
            loop={loop}
            onAnimationFinish={onAnimationFinish}
        />
    </Box>
    );
};
export default DefaultEyes;
//300 300