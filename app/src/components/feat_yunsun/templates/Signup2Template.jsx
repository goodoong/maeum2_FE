import React, {useEffect} from 'react';
import {CommonActions} from '@react-navigation/native';
import ScrollContainer from '../../common/atom/ScrollContainer';
import CustomText from '../../common/atom/CustomText';
import CustomTitle from '../../common/atom/CustomTitle';
import Signup2Form from '../organism/Signup2Form';
import CustomBar from '../../common/atom/CustomBar';
import {styled} from 'nativewind';
import {kidInfoValidation} from '../../feat_mina/constant/data';
import { useSelector } from "react-redux";
import { signup } from '../../../service/user';

const Box = styled(ScrollContainer);

// 회원가입 완료 후 홈 화면으로 리다이렉트
const resetAction = CommonActions.reset({
  index: 0,
  routes: [{name: 'charactername'}],
});

const Signup2Template = ({route, navigation}) => {
  const email = useSelector((state) => state.templateUser.email);
  const phone_number = useSelector((state) => state.templateUser.phone_number);
  const member_id = useSelector((state) => state.template.tempId);


  const onSubmit = async (data) => {
    try {
      // email과 phoneNumber를 data 객체에 추가
      const requestData = {
        ...data,
        member_id,
        email,
        phone_number,
      };
      const response = await signup(requestData);
      if (response.success) {
        console.log(requestData);
        navigation.dispatch(resetAction);
      } else {
        console.error('request failed', response.error);
        Alert.alert('Error', '회원가입 요청에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('Error during Request', error);
      Alert.alert('Error', '회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <Box className="space-y-4">
      <CustomTitle>회원가입</CustomTitle>
      <CustomText size="sm" color="darkgray">
        아이 정보를 입력해주세요
      </CustomText>
      <CustomBar rate={100} />
      <Signup2Form data={kidInfoValidation} onSubmit={onSubmit} />
    </Box>
  );
};

export default Signup2Template;
