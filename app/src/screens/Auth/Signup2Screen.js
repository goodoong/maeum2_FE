import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { CommonActions } from '@react-navigation/native';
import Container from "../../components/common/atom/Container";
import CustomTitle from "../../components/common/atom/CustomTitle";
import CustomText from "../../components/common/atom/CustomText";
import CustomInput from "../../components/common/atom/CustomInput";
import CustomBar from "../../components/common/atom/CustomBar";
import CustomBtn from "../../components/common/atom/CustomBtn";
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
       <Container>
      <CustomTitle>회원가입</CustomTitle>
      <CustomText size='sm' color='darkgray'>아이 정보를 입력해주세요</CustomText>
      <CustomBar rate={100}/>
      <CustomInput keyboardType="default"  placeholder="성" />
      <CustomInput keyboardType="default"  placeholder="이름" /> 
      <CustomInput keyboardType="numeric"  placeholder="생년월일(6자리)" />
      <CustomInput keyboardType="default"  placeholder="성별" />
      <CustomBtn 
             size='lg'
             color='buttonyellow'
             rounded= {true}
             title="완료"
             onPress={movemainScreen}
            />
       </Container>
    )

}
export default Signup2Screen;
