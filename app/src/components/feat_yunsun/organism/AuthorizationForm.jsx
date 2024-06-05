import React from 'react';
import CustomInput from '../../common/atom/CustomInput';
import CustomBtn from '../../common/atom/CustomBtn';
import { useForm } from 'react-hook-form';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';
import CustomText from '../../common/atom/CustomText';

const Form = styled(View);

const AuthorizationForm = ({ onSubmit, loading, timeLeft }) => {
  const { control, handleSubmit, register } = useForm();

  // 남은 시간을 MM:SS 형식으로 변환
  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <Form className="w-full flex-col justify-center items-center space-y-4">
      <CustomInput
        keyboardType="numeric"
        placeholder="인증번호"
        control={control}
        name="verification_code"
        autoFocus={true}
        register={register}
      />
      <CustomText size='xs' color={timeLeft <= 30 ? 'red' : 'darkgray'}>{`남은 시간: ${formatTime(timeLeft)}`}</CustomText>
      <CustomBtn
        size="lg"
        color="buttonyellow"
        rounded={true}
        title="다음"
        onPress={handleSubmit(onSubmit)}
        isLoading={loading}
      />
      <CustomBtn
        size="lg"
        color="buttonwhite"
        rounded={true}
        title="인증번호 다시받기"
        borderColor={true}
        borderWidth={true}
      // 여기에 재전송 로직 추가
      />
    </Form>
  );
};

export default AuthorizationForm;
