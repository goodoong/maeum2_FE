import React, { useEffect, useState } from 'react';
import ScrollContainer from '../../common/atom/ScrollContainer';
import CustomBar from '../../common/atom/CustomBar';
import CustomTitle from '../../common/atom/CustomTitle';
import CustomText from '../../common/atom/CustomText';
import Signup1Form from '../organisms/Signup1Form';
import { guardianInfoValidation } from '../../../constants/data';
import { styled } from 'nativewind';
import { useSelector, useDispatch } from 'react-redux';
import { setEmail, setNumber } from '../../../redux/slice/TemplateUserSlice';
import { smsrequestapi } from '../../../service/user';
import useToast from '../../../hooks/useToast';
import CustomToast from '../../common/atom/CustomToast';


const Box = styled(ScrollContainer);

const Signup1Template = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { message, visible, showToast } = useToast(); 

  const onSubmit = async data => {
    console.log(data);
    dispatch(setEmail(data.email));
    dispatch(setNumber(data.phone_number));

    setIsLoading(true); 

    try {
      const response = await smsrequestapi(data.phone_number);
      if (response.success) {
        navigation.navigate('authorization');
      } else {
        console.error('request failed', response.error);
        showToast('문자 인증 요청에 실패했습니다. 다시 시도해주세요.'); 
      }
    } catch (error) {
      console.error('Error during Request', error);
      showToast('문자 인증 요청에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false); 
    }
  };

  const authCode = useSelector(state => state.template.tempId);

  // 인가 코드를 콘솔에 출력
  useEffect(() => {
    if (authCode) {
      console.log('회원가입 페이지 Stored Authorization Code: ', authCode);
    }
  }, [authCode]);

  return (
    <>
      <Box className="space-y-4">
        <CustomTitle>회원가입</CustomTitle>
        <CustomText size="sm" color="darkgray">
          보호자 정보를 입력해주세요
        </CustomText>
        <CustomBar rate={50} />
          <Signup1Form
            data={guardianInfoValidation}
            onSubmit={onSubmit}
            isLoading={isLoading} // isLoading 상태 전달
          />
      </Box>
      <CustomToast message={message} visible={visible} />
    </>
  );
};

export default Signup1Template;
