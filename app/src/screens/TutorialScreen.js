import React from "react";
import ImageSlide from "../components/tutorial/ImageSlide";

const TutorialScreen = ({ route, navigation, appState }) => {
    return (
        <ImageSlide navigation={navigation}/>
    );
};
export default TutorialScreen;
