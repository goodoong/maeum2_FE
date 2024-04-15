import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


const AuthorizationScreen = ({ route, navigation }) => {

    useEffect(() => {

    }, []);

    const moveSignup2Screen = () => {
        navigation.navigate('signup2');
    }

    return (
        <View>

            <TouchableOpacity onPress={moveSignup2Screen}>
                <Text>
                    회원가입2 페이지로 이동합니다.
                </Text>
            </TouchableOpacity>
        </View>
    )

}
export default AuthorizationScreen;
