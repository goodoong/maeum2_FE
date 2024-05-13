import React,{useEffect} from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import InputContainer from '../../common/molecules/InputContainer';
import CustomText from '../../common/atom/CustomText';
import CustomBtn from '../../common/atom/CustomBtn';
import RadioButton from '../../common/atom/RadioButton';
import { scale, moderateScale } from '../../../utils/Scale';
import { styled } from 'nativewind';

const Form = styled(View)

const Signup2Form = ({ navigation, data, onSubmit, renderItem }) => {
    const {
      control,
      handleSubmit,
      formState: { errors },
      register,
      setValue,
    } = useForm();

  const informationItem = data.InformationList;

  return (
    <>
      <Form className='w-full flex-col justify-center items-center'>
        {informationItem.slice(0, 3).map((item, index) => (
          <React.Fragment key={index}>
            <InputContainer
              inputs={[
                {
                  name: item.key,
                  rules: {
                    required: { value: true, message: item.errormsg },
                    pattern: { value: item.Regex, message: item.errormsg }
                  },
                  placeholder: item.key,
                }
              ]}
              control={control}
              register={register}
            />
            {errors[item.key] && (
              <View style={{ marginBottom: scale(10), width: moderateScale(327, 0.3) }}>
                <CustomText size="xs" color="red">{errors[item.key].message}</CustomText>
              </View>
            )}
          </React.Fragment>
        ))}
          <RadioButton
                options={['남', '여']}
                onChange={selectedOption => {
                  setValue('성별', selectedOption);
                }}
              />
         <CustomBtn 
            size='lg'
            color='buttonyellow'
            rounded= {true}
            title="다음"
            onPress={handleSubmit(onSubmit)} 
      />
      </Form>
    </>
  );
  
};

export default Signup2Form;
