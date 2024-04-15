import React from "react";
import { Text } from "react-native";

const CustomText = ({children}) => {
    const customStyle = {
        fontFamily: 'Dongle-Regular',
        fontSize: 24,
    }

    return <Text style={customStyle}>{children}</Text>
};

export default CustomText;
