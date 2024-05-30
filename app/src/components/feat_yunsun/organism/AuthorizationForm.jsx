import React from "react"
import CustomInput from "../../common/atom/CustomInput"
import CustomBtn from "../../common/atom/CustomBtn"
import { useForm } from 'react-hook-form';
import { View } from "react-native";
import { styled } from "nativewind";

const Form = styled(View)

const AuthorizationForm = ({ onSubmit }) => {
    const {
      control,
      handleSubmit,
      register,
    } = useForm();

    return (
        <Form className="w-full flex-col justify-center items-center space-y-10">
           <CustomInput 
                keyboardType="numeric"  
                placeholder="인증번호" 
                control={control}
                name="verification_code"
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
             color='buttonwhite'
             rounded= {true}
             title="인증번호 다시받기"
             borderColor= {true}
             borderWidth= {true}
             // 여기에 재전송 로직 추가
            />
        </Form>
    )
}

export default AuthorizationForm;
