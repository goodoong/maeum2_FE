import React, { useState, useEffect, useRef } from 'react';
import AuthorizationForm from '../organism/AuthorizationForm';
import ScrollContainer from '../../common/atom/ScrollContainer';
import CustomText from '../../common/atom/CustomText';
import CustomTitle from '../../common/atom/CustomTitle';
import { styled } from 'nativewind';
import { useSelector } from 'react-redux';
import { smscodeapi } from '../../../service/user';
import { Alert } from 'react-native';

const Box = styled(ScrollContainer);

const AuthorizationTemplate = ({ route, navigation }) => {
  const phone_number = useSelector(state => state.templateUser.phone_number);
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60); // 5분(300초)
  const timerRef = useRef(null);

  const onSubmit = async data => {
    try {
      setLoading(true); // 로딩 시작
      const requestData = {
        ...data,
        phone_number,
      };
      console.log('Request Data:', requestData); // 요청 데이터 출력
      const response = await smscodeapi(requestData);
      console.log('Response Data:', response); // 응답 데이터 출력
      if (response.success) {
        clearTimeout(timerRef.current); // 타이머 정리
        navigation.navigate('signup2');
      } else {
        Alert.alert(
          'Error',
          '전화번호 인증에 실패했습니다. 다시 시도해주세요.',
        );
      }
    } catch (error) {
      Alert.alert('Error', '전화번호 인증에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false); // 로딩 종료
    }
  };

  useEffect(() => {
    const countdown = () => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearTimeout(timerRef.current);
          Alert.alert('인증 시간이 초과되었습니다. 다시 시도해주세요.');
          navigation.goBack();
          return 0;
        }
        return prevTime - 1;
      });
    };

    timerRef.current = setInterval(countdown, 1000); // 1초마다 실행

    return () => clearInterval(timerRef.current); // 언마운트 시 타이머 정리
  }, []);

  return (
    <Box className="space-y-4">
      <CustomTitle>전화번호 인증</CustomTitle>
      <CustomText size="sm" color="">
        {phone_number}로 온 숫자 네 자리를 입력해주세요
      </CustomText>
      <AuthorizationForm onSubmit={onSubmit} loading={loading} timeLeft={timeLeft} />
    </Box>
  );
};

export default AuthorizationTemplate;
