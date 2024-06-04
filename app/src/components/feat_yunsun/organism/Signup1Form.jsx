import React from 'react';
import {View} from 'react-native';
import {useForm} from 'react-hook-form';
import InputContainer from '../../common/molecules/InputContainer';
import CustomText from '../../common/atom/CustomText';
import CustomBtn from '../../common/atom/CustomBtn';
import {scale, moderateScale} from '../../../utils/Scale';
import {styled} from 'nativewind';

const Form = styled(View);

const Signup1Form = ({data, onSubmit, isLoading}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    register,
  } = useForm();

  const informationItem = data;

  return (
    <Form className="w-full flex-col justify-center items-center">
      {informationItem.map((item, index) => (
        <React.Fragment key={index}>
          <InputContainer
            inputs={[
              {
                name: item.key,
                rules: {
                  required: {value: true, message: item.errormsg},
                  pattern: {value: item.Regex, message: item.errormsg},
                },
                placeholder: item.placeholder,
                keyboardType: item.keyboardType,
              },
            ]}
            control={control}
            register={register}
          />
          {errors[item.key] && (
            <View
              style={{
                marginBottom: scale(10),
                width: moderateScale(327, 0.3),
              }}>
              <CustomText size="xs" color="red">
                {errors[item.key].message}
              </CustomText>
            </View>
          )}
        </React.Fragment>
      ))}
      <CustomBtn
        size="lg"
        color="buttonyellow"
        rounded={true}
        title="다음"
        onPress={handleSubmit(onSubmit)}
        isLoading={isLoading}
      />
    </Form>
  );
};

export default Signup1Form;
