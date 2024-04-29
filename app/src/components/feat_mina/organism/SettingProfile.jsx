import React from 'react';
import {View} from 'react-native';
import {styled} from 'nativewind';
import CustomText from '../../common/atom/CustomText';
import ProfileImage from '../molecules/ProfileImage';
import {scale} from '../../../utils/Scale';

const CustomBox = styled(View);

const SettingProfile = () => {
  return (
    <CustomBox className="flex flex-row w-full">
      <ProfileImage size="sm" />
      <CustomBox className="flex-col" style={{paddingLeft: scale(20)}}>
        <CustomText size="lg">마음이</CustomText>
        <CustomText size="sm" color="darkgray">maeum@gmail.com</CustomText>
      </CustomBox>
    </CustomBox>
  );
};

export default SettingProfile;
