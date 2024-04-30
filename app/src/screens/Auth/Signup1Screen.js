import React, {useEffect} from 'react';
import Container from '../../components/common/atom/Container';
import CustomTitle from '../../components/common/atom/CustomTitle';
import CustomBar from '../../components/common/atom/CustomBar';
import CustomInput from '../../components/common/atom/CustomInput';
import CustomText from '../../components/common/atom/CustomText';
import CustomBtn from '../../components/common/atom/CustomBtn';
import { styled } from 'nativewind';

const Box = styled(Container)

const Signup1Screen = ({route, navigation}) => {
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
export default Signup1Screen;
