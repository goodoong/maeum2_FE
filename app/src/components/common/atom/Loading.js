import React from "react";
import LottieView from "lottie-react-native";
import { height, moderateScale, scale, verticalScale, width } from "../../../utils/Scale";
import { View } from "react-native";
import { styled } from "nativewind";

const Box = styled(View)

const Loading = ({width, height, loop, onAnimationFinish }) => {
    return (
     <Box className="w-full flex jusify-center items-center">
        <LottieView
            style={{
                width: moderateScale(width,0.3),
                height: moderateScale(height),
            }}
            source={require('../../../assets/lottie/buttonloading.json')}
            autoPlay
            loop={loop}
            onAnimationFinish={onAnimationFinish}
        />
    </Box>
    );
};
export default Loading;