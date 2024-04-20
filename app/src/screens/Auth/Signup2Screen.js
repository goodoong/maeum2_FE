import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


const Signup2Screen = ({ route, navigation }) => {

    useEffect(() => {

    }, []);

    const movemainScreen = () => {
        navigation.navigate('main');
    }

    return (
        <View>

            <TouchableOpacity onPress={movemainScreen}>
                <Text>
                    메인 페이지로 이동합니다.
                </Text>
            </TouchableOpacity>
        </View>
    )

}
export default Signup2Screen;
