import React, { useEffect } from 'react';
import ScrollContainer from '../../common/atom/ScrollContainer';
import CustomBar from '../../common/atom/CustomBar';
import CustomTitle from '../../common/atom/CustomTitle';
import CustomText from '../../common/atom/CustomText';
import Signup1Form from '../organism/Signup1Form';
import {guardianInfoValidation} from '../../feat_mina/constant/data';
import {styled} from 'nativewind';
import { useSelector } from "react-redux";


const Box = styled(ScrollContainer);

const Signup1Template = ({navigation}) => {

  const onSubmit = data => {
    console.log(data);
    navigation.navigate('authorization');
  };

  const authCode = useSelector((state) => state.template.tempId);

  // 인가 코드를 콘솔에 출력
  useEffect(() => {
    if (authCode) {
      console.log("회원가입 페이지 Stored Authorization Code: ", authCode); 
    }
  }, []);


  return (
    <Box className="space-y-4">
      <CustomTitle>회원가입</CustomTitle>
      <CustomText size="sm" color="darkgray">
        보호자 정보를 입력해주세요
      </CustomText>
      <CustomBar rate={50} />
      <Signup1Form data={guardianInfoValidation} onSubmit={onSubmit} />
    </Box>
  );
};

export default Signup1Template;
