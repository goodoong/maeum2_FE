import React, { useEffect } from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Container from "../../common/atom/Container";
import CustomBtn from "../../common/atom/CustomBtn";
import CustomText from "../../common/atom/CustomText";
import CustomInput from "../../common/atom/CustomInput";
import CustomTitle from "../../common/atom/CustomTitle";
import { styled } from 'nativewind';

const Box = styled(Container)

const AuthorizationTemplate = ({ route, navigation }) => {

    useEffect(() => {

    }, []);

    const moveSignup2Screen = () => {
        navigation.push('signup2');
    }

    return (
        <Box className="space-y-4"> 
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
        </Box>
    )

}
export default AuthorizationTemplate;
