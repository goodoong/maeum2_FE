import React from "react";
import LottieView from "lottie-react-native";
import { verticalScale, moderateScale } from "../../../utils/Scale";

const Splash = ({ width, height, loop, onAnimationFinish }) => {
    return (
        <LottieView
            style={{
                width: moderateScale(width),
                height: verticalScale(height),
            }}
            source={require('../../../assets/lottie/splash.json')}
            autoPlay
            loop={loop}
            onAnimationFinish={onAnimationFinish}
        />
    );
};
export default Splash;