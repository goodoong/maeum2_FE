import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import ScrollContainer from '../../common/atom/ScrollContainer';
import CustomBar from '../../common/atom/CustomBar';
import CustomTitle from '../../common/atom/CustomTitle';
import CustomText from '../../common/atom/CustomText';
import Signup1Form from '../organism/Signup1Form';
import {guardianInfoValidation} from '../../feat_mina/constant/data';
import {styled} from 'nativewind';
import {useSelector, useDispatch} from 'react-redux';
import {setEmail, setNumber} from '../../../redux/slice/TemplateUserSlice';
import {smsrequestapi} from '../../../service/user';
import Loading from '../../common/atom/Loading'; // Import the Loading component

const Box = styled(ScrollContainer);

const Signup1Template = ({navigation}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async data => {
    console.log(data);
    dispatch(setEmail(data.email));
    dispatch(setNumber(data.phone_number));

    setIsLoading(true); // Set loading to true when the request starts

    try {
      const response = await smsrequestapi(data.phone_number);
      if (response.success) {
        navigation.navigate('authorization');
      } else {
        console.error('request failed', response.error);
        Alert.alert(
          'Error',
          '문자 인증 요청에 실패했습니다. 다시 시도해주세요.',
        );
      }
    } catch (error) {
      console.error('Error during Request', error);
      Alert.alert('Error', '문자 인증 요청에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false); // Set loading to false when the request completes
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
  );
};

export default Signup1Template;
