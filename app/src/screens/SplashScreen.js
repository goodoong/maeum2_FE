import React from "react";
import Splash from "../components/common/atom/Splash";
import ScrollContainer from "../components/common/atom/ScrollContainer";
import CustomTitle from "../components/common/atom/CustomTitle";

const SplashScreen = ({ navigation }) => {

    const moveLoginScreen = () => {
        navigation.push('login');
    };

    return (
        <ScrollContainer>
            <Splash width={300} height={300} loop={false} onAnimationFinish={moveLoginScreen} />
            <CustomTitle>마음의 창</CustomTitle>
        </ScrollContainer>
    );
};
export default SplashScreen;