import React from "react";
import Splash from "../components/common/atom/Splash";
import Container from "../components/common/atom/Container";
import CustomTitle from "../components/common/atom/CustomTitle";

const SplashScreen = ({ navigation }) => {

    const moveLoginScreen = () => {
        navigation.push('login');
    };

    return (
        <Container>
            <Splash width={300} height={300} loop={false} onAnimationFinish={moveLoginScreen} />
            <CustomTitle>마음의 창</CustomTitle>
        </Container>
    );
};
export default SplashScreen;