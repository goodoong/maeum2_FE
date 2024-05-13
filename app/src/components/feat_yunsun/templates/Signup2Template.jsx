import React, { useEffect } from "react";
import { CommonActions } from '@react-navigation/native';
import Container from "../../common/atom/Container";
import CustomText from "../../common/atom/CustomText";
import CustomTitle from "../../common/atom/CustomTitle";
import Signup2Form from "../organism/Signup2Form";
import CustomBar from "../../common/atom/CustomBar";
import { styled } from 'nativewind';
import { InformationList } from '../../feat_mina/constant/data';

const Box = styled(Container)

// 회원가입 완료 후 홈 화면으로 리다이렉트
const resetAction = CommonActions.reset({
    index: 0,
    routes: [{ name: 'main' }],
  });
 


const Signup2Template = ({ route, navigation }) => {

    useEffect(() => {

    }, []);

    const onSubmit = data => {
        navigation.dispatch(resetAction);
        console.log(data)
        //navigation.navigate('main');
    }

    return (
       <Box className="space-y-4">
      <CustomTitle>회원가입</CustomTitle>
      <CustomText size='sm' color='darkgray'>아이 정보를 입력해주세요</CustomText>
      <CustomBar rate={100}/>
      <Signup2Form  
        data={{ InformationList }}
       onSubmit={onSubmit}
      />
       </Box>
    )

}
export default Signup2Template;
