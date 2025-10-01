import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import InputContainer from '../../common/molecules/InputContainer';
import InformationForm from '../../setting/molecules/InformationForm';
import CustomText from '../../common/atom/CustomText';
import CustomInput from '../../common/atom/CustomInput';
import RadioButton from '../../common/atom/RadioButton';
import { scale, moderateScale } from '../../../utils/Scale';
import ModalDatePicker from '../../common/atom/ModalDatePicker';

const InformationValidationForm = ({
  navigation,
  data,
  onSubmit,
  validationList,
}) => {
  const { control, handleSubmit, formState: { errors }, setValue } = useForm();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (data) {
      const gender = data.response.kidInformationData.find(item => item.key === '성별')?.data;
      setValue('child_gender', gender);

      const birth = data.response.kidInformationData.find(item => item.key === '생년월일')?.data;
      if (birth) {
        setDate(new Date(birth));
        setValue('child_birth', birth);
      }
    }
  }, [data, setValue]);

  if (!data) return <View><CustomText>Loading...</CustomText></View>;

  const getValidationRule = label => validationList.find(rule => rule.label === label) || {};
  const getDefaultValue = key => data.response.kidInformationData.find(item => item.key === key)?.data ||
                                data.response.guardianInformationData.find(item => item.key === key)?.data || '';

  const formatSubmitData = data => Object.fromEntries(
    Object.entries(data).map(([key, value]) => [validationList.find(rule => rule.label === key)?.key || key, value])
  );

  return (
    <InformationForm
      navigation={navigation}
      data={data}
      moveScreen={handleSubmit(formData => onSubmit(formatSubmitData(formData)))}
      isFix={false}
      renderItem={({ item, index }) => {
        if (index === 0 || index === 6) {
          return (
            <View key={index} className="w-full flex-row" style={{ padding: scale(12), marginBottom: scale(6), backgroundColor: item.color }}>
              <CustomText>{item.key}</CustomText>
            </View>
          );
        }  else if (index === 1) {
          return (
            <View key={index} className="w-full flex-col justify-center items-center" style={{ marginBottom: scale(10) }}>
              <CustomInput
                control={control}
                name="ai_name"
                rules={{ required: { value: true, message: '캐릭터 이름을 입력해주세요.' } }}
                placeholder="이름을 지어주세요."
                defaultValue={getDefaultValue('캐릭터이름')}
                label="캐릭터이름"
              />
              {errors.ai_name && (
                <View className="flex-row" style={{ width: moderateScale(327, 0.3) }}>
                  <CustomText size="xs" color="red">
                    {errors.ai_name.message || '올바른 값을 입력해주세요.'}
                  </CustomText>
                </View>
              )}
            </View>
          );
        } else if (item.key === '성별') {
          return (
            <View key={index} className="w-full flex-row justify-center items-center" style={{ padding: scale(12), marginBottom: scale(6), backgroundColor: item.color }}>
              <RadioButton
                options={['남', '여']}
                onChange={selectedOption => setValue('child_gender', selectedOption)}
                initialValue={getDefaultValue(item.key)}
              />
            </View>
          );
        } else if (item.key === '생년월일') {
          return (
            <View key={index} className="w-full flex-row justify-between items-center" style={{ padding: scale(12), marginBottom: scale(6), backgroundColor: item.color }}>
              <CustomText>{getDefaultValue(item.key)}</CustomText>
              <ModalDatePicker
                title="생년월일"
                date={date}
                setDate={selectedDate => {
                  setDate(selectedDate);
                  setValue('child_birth', selectedDate.toISOString().split('T')[0]);
                }}
              />
            </View>
          );
        } else {
          const validationRule = getValidationRule(item.key);
          const defaultValue = getDefaultValue(item.key);

          return (
            <View key={index} className="w-full flex-col justify-center items-center" style={{ marginBottom: scale(10) }}>
              <InputContainer
                inputs={[{
                  name: item.key,
                  rules: {
                    required: { value: true, message: validationRule.errormsg },
                    pattern: { value: validationRule.Regex, message: validationRule.errormsg }
                  },
                  placeholder: validationRule.placeholder || item.key,
                  label: validationRule.label,
                  defaultValue
                }]}
                control={control}
              />
              {errors[item.key] && (
                <View className="flex-row" style={{ width: moderateScale(327, 0.3) }}>
                  <CustomText size="xs" color="red">
                    {errors[item.key].message || '올바른 값을 입력해주세요.'}
                  </CustomText>
                </View>
              )}
            </View>
          );
        }
      }}
    />
  );
};

export default InformationValidationForm;
