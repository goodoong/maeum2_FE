import React from "react";
import Container from "../components/common/atom/Container";
import ImageSlide from "../components/feat_yunsun/organism/ImageSlide";

const TutorialScreen = ({ route, navigation, appState }) => {
    return (
        <Container>
            <ImageSlide navigation={navigation}/>
        </Container>
    );
};
export default TutorialScreen;
