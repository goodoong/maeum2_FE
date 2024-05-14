import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import AuthorizationForm from "../organism/AuthorizationForm";
import Container from "../../common/atom/Container";
import CustomText from "../../common/atom/CustomText";
import CustomTitle from "../../common/atom/CustomTitle";
import { styled } from 'nativewind';
import { FlatList } from "react-native";

const Box = styled(Container)

const AuthorizationTemplate = ({ route, navigation }) => {

    useEffect(() => {

    }, []);

    const onSubmit = data => {
        console.log(data); 
        navigation.navigate('signup2');
    };

    return (
        <ScrollView>
            <Box className="space-y-4"> 
                <CustomTitle>전화번호 인증</CustomTitle>
                {/* 전화번호 값 잠시 전역 변수로 저장해놓고 출력하기 */}
                <CustomText size='sm' color=''>(전화번호)로 온 숫자 네 자리를 입력해주세요</CustomText>
                <AuthorizationForm 
                onSubmit={onSubmit}/>
            </Box>
        </ScrollView>
    )

}
export default AuthorizationTemplate;
