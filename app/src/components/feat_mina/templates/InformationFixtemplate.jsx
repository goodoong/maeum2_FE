import React from 'react';
import {useForm} from 'react-hook-form';
import {View} from 'react-native';
import InputContainer from '../../common/molecules/InputContainer';
import CustomText from '../../common/atom/CustomText';
import InformationForm from '../organism/InformationForm';
import RadioButton from '../../common/atom/RadioButton';
import {scale} from '../../../utils/Scale';
import {kidInformationData} from '../mocks/mockdata';
import {guardianInformationData} from '../mocks/mockdata';
import {InformationList} from '../constant/data'; // 여기서 InformationList를 가져옵니다.

const InformationFixtemplate = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();

  // 제출 시 실행될 함수
  const onSubmit = data => {
    navigation.navigate('info'); // 다음 페이지로 이동
  };

  // watch를 사용하여 제출될 데이터 감시
  const watchedFields = watch();

  // watchedFields를 이용하여 현재 입력된 값 출력
  console.log(watchedFields);

  const renderItem = ({item, index}) => {
    if (index === 0 || index === 5) {
      return (
        <View
          className="w-full flex-row"
          style={{
            padding: scale(12),
            marginBottom: scale(6),
            backgroundColor: item.color,
          }}>
          <CustomText>{item.key}</CustomText>
        </View>
      );
    } else if (item.key === '성별') {
      return (
        <View
          className="w-full flex-row justify-center items-center"
          style={{
            padding: scale(12),
            marginBottom: scale(6),
            backgroundColor: item.color,
          }}>
          <RadioButton
            options={['남', '여']}
            onChange={selectedOption => console.log(selectedOption)}
            initialValue={item.data}
          />
        </View>
      );
    } else {
      const informationItem = InformationList[index - 1];
      return (
        <View className="w-full flex-row justify-center items-center">
          <InputContainer
            inputs={[
              {
                name: item.key,
                rules: {pattern: informationItem?.Regex},
                placeholder: item.key,
                autoFocus: index === 1,
                defaultValue: item.data,
              },
            ]}
            control={control}
          />
          {errors[item.key] && (
            <CustomText>{errors[item.key].message}</CustomText>
          )}
        </View>
      );
    }
  };

  return (
    <InformationForm
      navigation={navigation}
      data={{kidInformationData, guardianInformationData, InformationList}}
      moveScreen={handleSubmit(onSubmit)}
      isFix={false}
      renderItem={renderItem}
    />
  );
};

export default InformationFixtemplate;
