import React, { useEffect } from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Container from "../../components/common/atom/Container";
import CustomInput from "../../components/common/atom/CustomInput";
import CustomTitle from "../../components/common/atom/CustomTitle";
import CustomText from "../../components/common/atom/CustomText";
import CustomBtn from "../../components/common/atom/CustomBtn";

const AuthorizationScreen = ({ route, navigation }) => {

    useEffect(() => {

    }, []);

    const moveSignup2Screen = () => {
        navigation.push('signup2');
    }

    return (
        <Container> 
            <CustomTitle>전화번호 인증</CustomTitle>
            <CustomText size='sm' color=''>(전화번호)로 온 번호 네 자리를 입력해주세요</CustomText>
            <CustomInput keyboardType="numeric"  placeholder="인증번호" />
            <TouchableOpacity>
                <Text>인증번호 다시 받기</Text>
            </TouchableOpacity>
            <CustomBtn 
             size='lg'
             color='buttonyellow'
             rounded= {true}
             title="다음"
             onPress={moveSignup2Screen}
            />
        </Container>
    )

}
export default AuthorizationScreen;
