import React, {useState} from 'react';
import {View} from 'react-native';
import {useForm} from 'react-hook-form';
import InputContainer from '../../common/molecules/InputContainer';
import CustomText from '../../common/atom/CustomText';
import CustomBtn from '../../common/atom/CustomBtn';
import RadioButton from '../../common/atom/RadioButton';
import {scale, moderateScale} from '../../../utils/Scale';
import {styled} from 'nativewind';
import ModalDatePicker from '../../common/atom/ModalDatePicker';

const Form = styled(View);
const Box = styled(View);

const Signup2Form = ({navigation, data, onSubmit, renderItem}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    register,
    setValue,
  } = useForm();

  const informationItem = data;
  const [date, setDate] = useState(new Date());

  return (
    <>
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
                  label:item.label,
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
        <Box className="w-80 m-2 flex flex-row justify-between items-center">
          <CustomText>{date.toISOString().split('T')[0]}</CustomText>
          <ModalDatePicker 
            title="생년월일" 
            date={date} 
            setDate={(selectedDate) => {
              setDate(selectedDate);
              setValue('child_birth', selectedDate.toISOString().split('T')[0]);
            }} 
          />
        </Box>
        <RadioButton
          options={['남', '여']}
          onChange={selectedOption => {
            setValue('child_gender', selectedOption);
          }}
        />
        <CustomBtn
          size="lg"
          color="buttonyellow"
          rounded={true}
          title="완료"
          onPress={handleSubmit(onSubmit)}
        />
      </Form>
    </>
  );
};

export default Signup2Form;