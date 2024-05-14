import React from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import { styled } from 'nativewind';

import Container from '../../common/atom/Container';
import CustomText from '../../common/atom/CustomText';
import CustomInput from '../../common/atom/CustomInput';
import CustomBtn from '../../common/atom/CustomBtn';
import TestLottie from '../../common/atom/CharacterBody';

const CustomContainer = styled(Container);

const CharacterNameTemplate = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const onSubmit = data => {
    console.log(data); 
    navigation.navigate('tutorial');
  };

  return (
    <>
      <CustomContainer className='space-y-4'>
        <CustomText size="md" color="darkgray">앞으로 함께할 친구의</CustomText>
        <CustomText size="md" color="darkgray">이름을 정해주세요!</CustomText>
        {/* 로티 캐릭터 이미지 */}
        <TestLottie width={300} height={300}/>
        <CustomInput 
          keyboardType="default"  
          placeholder="친구의 이름을 지어주세요!" 
          control={control}
          name="characterName"
          rules={{ required: '이름을 입력하세요.', pattern: { value: /^[가-힣a-zA-Z]{2,20}$/, message: '2~20자의 한글 또는 영문으로 입력하세요.' } }}
          autoFocus={true}
          register={register}
        />
         {errors.characterName && (
          <View style={{ marginBottom: 10 }}>
            <CustomText size="xs" color="red">{errors.characterName.message}</CustomText>
          </View>
        )}
        <CustomBtn 
          size='lg'
          color='buttonyellow'
          rounded={true}
          title="다음"
          onPress={handleSubmit(onSubmit)} 
        />
      </CustomContainer>
    </>
  );
};

export default CharacterNameTemplate;
