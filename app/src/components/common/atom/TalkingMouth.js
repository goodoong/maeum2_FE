import React from "react";
import LottieView from "lottie-react-native";
import { height, moderateScale, width } from "../../../utils/Scale";
import { View } from "react-native";
import { styled } from "nativewind";

const Box = styled(View)

const TalkingMouth = ({width, height, loop, onAnimationFinish }) => {
    return (
     <Box className="w-full flex jusify-center items-center" style={{position:'absolute',  top: moderateScale(150, -0.1), left:moderateScale(15, 0.2)}}>
        <LottieView
            style={{
                width: moderateScale(width,0.1),
                height: moderateScale(height, 0.4),
            }}
            source={require('../../../assets/lottie/talking_mouth.json')}
            autoPlay
            loop={loop}
            onAnimationFinish={onAnimationFinish}
        />
    </Box>
    );
};

export default TalkingMouth;
//120 120