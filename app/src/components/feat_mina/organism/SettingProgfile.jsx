import React from 'react';
import {View, Image} from 'react-native';
import {styled} from 'nativewind';
import CustomText from '../../common/atom/CustomText';
import ProfileImage from '../../../assets/Images/ProfileImage.png';
import {scale} from '../../../utils/Scale';

const CustomBox = styled(View);

const SettingProfile = () => {
  return (
    <CustomBox className="flex flex-row w-full">
      <Image source={ProfileImage} />
      <CustomBox className="flex-col" style={{paddingLeft: scale(20)}}>
        <CustomText size="lg">마음이</CustomText>
        <CustomText size="sm" color="darkgray">maeum@gmail.com</CustomText>
      </CustomBox>
    </CustomBox>
  );
};

export default SettingProfile;
