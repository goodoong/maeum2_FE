import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { CommonActions } from '@react-navigation/native';


// 회원가입 완료 후 홈 화면으로 리다이렉트
const resetAction = CommonActions.reset({
    index: 0,
    routes: [{ name: 'main' }],
  });
 


const Signup2Screen = ({ route, navigation }) => {

    useEffect(() => {

    }, []);

    const movemainScreen = () => {
        navigation.dispatch(resetAction);
        //navigation.navigate('main');
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
