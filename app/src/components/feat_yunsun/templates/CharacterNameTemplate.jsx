import React,{useState} from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import { styled } from 'nativewind';

import ScrollContainer from '../../common/atom/ScrollContainer';
import CustomText from '../../common/atom/CustomText';
import CustomInput from '../../common/atom/CustomInput';
import CustomBtn from '../../common/atom/CustomBtn';
import Character from '../../common/molecules/Character';
import { charactername } from '../../../service/user';

const CustomContainer = styled(ScrollContainer);

const CharacterNameTemplate = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true); // 로딩 시작
      const response = await charactername(data);
        if (response.success) {
        console.log(data);
        navigation.navigate('tutorial');
      } else {
        console.error('Request failed', response.error);
        Alert.alert('Error', '캐릭터 이름 설정에 실패했습니다. 다시 시도해주세요.');
    }
    } catch (error) {
    console.error('Error during Request', error);
    Alert.alert('Error', '캐릭터 이름 설정에 실패했습니다. 다시 시도해주세요.');
  } finally {
   setLoading(false); // 로딩 종료
  }
};

  return (
    <>
      <CustomContainer className='space-y-4'>
        <CustomText size="md" color="darkgray">앞으로 함께할 친구의</CustomText>
        <CustomText size="md" color="darkgray">이름을 정해주세요!</CustomText>
        <Character feelingdata="happy" />
        <CustomInput 
          keyboardType="default"  
          placeholder="친구의 이름을 지어주세요!" 
          control={control}
          name="ai_name"
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
