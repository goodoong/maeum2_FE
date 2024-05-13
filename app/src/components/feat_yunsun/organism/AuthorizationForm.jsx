import React from "react"
import CustomInput from "../../common/atom/CustomInput"
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomBtn from "../../common/atom/CustomBtn"
import CustomText from "../../common/atom/CustomText"
import { useForm } from 'react-hook-form';
import { View } from "react-native";
import { styled } from "nativewind";

const Form = styled(View)

const AuthorizationForm = ({ navigation, data, onSubmit, renderItem }) => {
    const {
      control,
      handleSubmit,
      formState: { errors },
      register,
      setValue,
    } = useForm();

    return (
        <Form className="w-full flex-col justify-center items-center space-y-10">
           <CustomInput 
                keyboardType="numeric"  
                placeholder="인증번호" 
                control={control}
                name="인증번호"
                //rules={input.rules}
                autoFocus={true}
                register={register}/>
            <CustomBtn 
             size='lg'
             color='buttonyellow'
             rounded= {true}
             title="다음"
             onPress={handleSubmit(onSubmit)} 
            />
             <CustomBtn 
             size='lg'
             color='gray'
             rounded= {true}
             title="인증번호 다시받기"
             //onPress={handleSubmit(onSubmit)} 
            />
        </Form>
    )
}

export default AuthorizationForm;