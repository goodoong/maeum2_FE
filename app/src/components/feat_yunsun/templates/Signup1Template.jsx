import React from 'react';
import ScrollContainer from '../../common/atom/ScrollContainer';
import CustomBar from '../../common/atom/CustomBar';
import CustomBtn from '../../common/atom/CustomBtn';
import CustomTitle from '../../common/atom/CustomTitle';
import CustomText from '../../common/atom/CustomText';
import Signup1Form from '../organism/Signup1Form';
import {guardianInfoValidation} from '../../feat_mina/constant/data';
import {styled} from 'nativewind';

const Box = styled(ScrollContainer);

const Signup1Template = ({navigation}) => {
  const onSubmit = data => {
    console.log(data);
    navigation.navigate('authorization');
  };

  return (
    <Box className="space-y-4">
      <CustomTitle>회원가입</CustomTitle>
      <CustomText size="sm" color="darkgray">
        보호자 정보를 입력해주세요
      </CustomText>
      <CustomBar rate={50} />
      <Signup1Form data={guardianInfoValidation} onSubmit={onSubmit} />
    </Box>
  );
};

export default Signup1Template;
