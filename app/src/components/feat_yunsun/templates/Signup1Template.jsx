import React from 'react';
import Container from '../../common/atom/Container';
import CustomBar from '../../common/atom/CustomBar';
import CustomBtn from '../../common/atom/CustomBtn';
import CustomTitle from '../../common/atom/CustomTitle';
import CustomText from '../../common/atom/CustomText';
import Signup1Form from '../organism/Signup1Form';
import { InformationList } from '../../feat_mina/constant/data';
import { styled } from 'nativewind';

const Box = styled(Container);

const Signup1Template = ({ navigation }) => {


  const onSubmit = data => {
    console.log(data); 
  // navigation.navigate('authorization');
  };

  return (
    <Box className='space-y-4'>
      <CustomTitle>회원가입</CustomTitle>
      <CustomText size='sm' color='darkgray'>보호자 정보를 입력해주세요</CustomText>
      <CustomBar rate={50}/>
      <Signup1Form  
        data={{ InformationList }}
        onSubmit={onSubmit}
      />
    </Box>
  );
};

export default Signup1Template;
