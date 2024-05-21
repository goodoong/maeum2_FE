import React from "react";
import LottieView from "lottie-react-native";
import { moderateScale } from "../../../utils/Scale";
import { View } from "react-native";
import { styled } from "nativewind";

const Box = styled(View)

const SadEyes = ({ width, height, loop, onAnimationFinish }) => {
    return (
     <Box className="w-full flex jusify-center items-center" style={{position:'absolute', top:'8%', left:'11%'}}> 
        <LottieView
            style={{
                width: moderateScale(width,0.3),
                height: moderateScale(height),
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