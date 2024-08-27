import React from "react";
import LottieView from "lottie-react-native";
import { moderateScale } from "../../../utils/Scale";
import { View } from "react-native";
import { styled } from "nativewind";

const Box = styled(View)

const CharacterBody = ({ width, height, loop, onAnimationFinish }) => {
    return (
     <Box className="w-full flex jusify-center items-center right-2">
        <LottieView
            style={{
                position: 'relative',
                width: moderateScale(width,0.3),
                height: moderateScale(height),
            }}
            source={require('../../../assets/lottie/characterbody.json')}
            autoPlay
            loop={loop}
            onAnimationFinish={onAnimationFinish}
        />
    </Box>
    );
};
export default CharacterBody;