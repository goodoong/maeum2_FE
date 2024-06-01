import React, { useState } from 'react';
import { CommonActions } from '@react-navigation/native';
import ScrollContainer from '../../common/atom/ScrollContainer';
import CustomText from '../../common/atom/CustomText';
import CustomTitle from '../../common/atom/CustomTitle';
import Signup2Form from '../organism/Signup2Form';
import CustomBar from '../../common/atom/CustomBar';
import { styled } from 'nativewind';
import { kidInfoValidation } from '../../feat_mina/constant/data';
import { useSelector } from "react-redux";
import { signup } from '../../../service/user';
import { setItem } from '../../../hooks/useAsyncStorage';
import { Alert, ActivityIndicator } from 'react-native';

const Box = styled(ScrollContainer);

// 회원가입 완료 후 홈 화면으로 리다이렉트
const resetAction = CommonActions.reset({
  index: 0,
  routes: [{ name: 'charactername' }],
});

const Signup2Template = ({ route, navigation }) => {
  const email = useSelector((state) => state.templateUser.email);
  const phone_number = useSelector((state) => state.templateUser.phone_number);
  const member_id = useSelector((state) => state.template.tempId);

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // email과 phoneNumber를 data 객체에 추가
      const requestData = {
        ...data,
        member_id,
        email,
        phone_number,
      };
      const response = await signup(requestData);
      if (response.data.success) {
        // 응답 헤더에서 토큰 추출
        const headers = response.headers;
        const token = headers && (headers['authorization'] || headers['Authorization']);
        if (token) {
          // Bearer 접두어 제거
          const tokenValue = token.startsWith('Bearer ') ? token.slice(7) : token;
          // 토큰을 AsyncStorage에 저장
          await setItem('token', tokenValue);
          console.log(`Token saved: ${tokenValue}`);
          // 토큰 저장 후 홈 화면으로 리다이렉트
          navigation.dispatch(resetAction);
        } else {
          console.error('Token is missing in the response headers');
          Alert.alert('Error', '회원가입에 실패했습니다. 다시 시도해주세요.');
        }
      } else {
        console.error('request failed', response.data.error);
        Alert.alert('Error', '회원가입 요청에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('Error during Request', error);
      Alert.alert('Error', '회원가입에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="space-y-4">
      <CustomTitle>회원가입</CustomTitle>
      <CustomText size="sm" color="darkgray">
        아이 정보를 입력해주세요
      </CustomText>
      <CustomBar rate={100} />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Signup2Form data={kidInfoValidation} onSubmit={onSubmit} />
      )}
    </Box>
  );
};

export default Signup2Template;