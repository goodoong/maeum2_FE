import React from "react";
import LottieView from "lottie-react-native";
import { verticalScale, moderateScale } from "../../../utils/Scale";

const TestLottie = ({ width, height, loop, onAnimationFinish }) => {
    return (
        <LottieView
            style={{
                width: moderateScale(width),
                height: verticalScale(height),
            }}
            source={require('../../../assets/lottie/test.json')}
            autoPlay
            loop={loop}
            onAnimationFinish={onAnimationFinish}
        />
    );
};
export default TestLottie;