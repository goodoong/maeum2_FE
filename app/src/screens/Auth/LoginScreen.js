import React, { useEffect } from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomText from "../../components/common/atom/CustomText";
import CustomTitle from "../../components/common/atom/CustomTitle";


const LoginScreen = ({ route, navigation }) => {

    useEffect(() => {

    }, []);

    const moveAccountScreen = () => {
        navigation.navigate('account');
    }

    return (
        <TouchableOpacity onPress={moveAccountScreen}>
            <CustomTitle >로그인</CustomTitle>
            <Text className="text-buttonpink">
                연동 페이지로 이동합니다.
            </Text>
        </TouchableOpacity>
    )
}

export default LoginScreen;
