import React from "react";
import ImageSlide from "../components/common/molecules/Slider";
import Container from "../components/common/atom/Container";

const TutorialScreen = ({ route, navigation, appState }) => {
    return (
        <Container>
            <ImageSlide/>
        </Container>
    );
};
export default TutorialScreen;
