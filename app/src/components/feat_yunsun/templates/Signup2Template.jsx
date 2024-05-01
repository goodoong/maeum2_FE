import React, { useEffect } from "react";
import { CommonActions } from '@react-navigation/native';
import Container from "../../common/atom/Container";
import CustomText from "../../common/atom/CustomText";
import CustomTitle from "../../common/atom/CustomTitle";
import CustomInput from "../../common/atom/CustomInput";
import CustomBtn from "../../common/atom/CustomBtn";
import CustomBar from "../../common/atom/CustomBar";
import { styled } from 'nativewind';

const Box = styled(Container)

// 회원가입 완료 후 홈 화면으로 리다이렉트
const resetAction = CommonActions.reset({
    index: 0,
    routes: [{ name: 'main' }],
  });
 


const Signup2Template = ({ route, navigation }) => {

    useEffect(() => {

    }, []);

    const movemainScreen = () => {
        navigation.dispatch(resetAction);
        //navigation.navigate('main');
    }

    return (
       <Box className="space-y-4">
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
       </Box>
    )

}
export default Signup2Template;
