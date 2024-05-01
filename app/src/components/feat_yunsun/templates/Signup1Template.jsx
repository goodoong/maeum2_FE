import React, {useEffect} from 'react';
import Container from '../../common/atom/Container';
import CustomBar from '../../common/atom/CustomBar';
import CustomBtn from '../../common/atom/CustomBtn';
import CustomInput from '../../common/atom/CustomInput';
import CustomText from '../../common/atom/CustomText';
import CustomTitle from '../../common/atom/CustomTitle';
import { styled } from 'nativewind';

const Box = styled(Container)

const Signup1Template = ({route, navigation}) => {
  useEffect(() => {}, []);

  const moveAuthorizationScreen = () => {
    navigation.push('authorization');
  };
  return (
    <Box className='space-y-4'>
      <CustomTitle>회원가입</CustomTitle>
      <CustomText size='sm' color='darkgray'>보호자 정보를 입력해주세요</CustomText>
      <CustomBar rate={50}/>
      <CustomInput keyboardType="email-address"  placeholder="Email" />  
      <CustomInput keyboardType="numeric"  placeholder="전화번호" />
      <CustomBtn 
        size='lg'
        color='buttonyellow'
        rounded= {true}
        title="다음"
       onPress={moveAuthorizationScreen}
      />
    </Box>
  );
};
export default Signup1Template;
