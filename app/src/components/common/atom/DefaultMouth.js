import React from "react";
import LottieView from "lottie-react-native";
import { moderateScale } from "../../../utils/Scale";
import { View } from "react-native";
import { styled } from "nativewind";

const Box = styled(View)

const DefaultMouth = ({ width, height, loop, onAnimationFinish }) => {
    return (
     <Box className="w-full flex jusify-center items-center" style={{position:'absolute', top:'30%', left:'3%'}}>
        <LottieView
            style={{
                width: moderateScale(width,0.3),
                height: moderateScale(height),
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