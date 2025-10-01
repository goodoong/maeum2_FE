import React from 'react';
import { View } from 'react-native';
import { styled } from 'nativewind';
import CustomText from '../../common/atom/CustomText';
import { scale } from '../../../utils/Scale';

const CustomBox = styled(View);

const SettingProfile = ({data}) => {

  return (
    <CustomBox className="flex flex-row w-full">
      <CustomBox className="flex-col" style={{ paddingLeft: scale(20) }}>
        <CustomText size="lg">{data?.child_first_name}</CustomText>
        <CustomText size="sm" color="darkgray">{data?.email}</CustomText>
      </CustomBox>
    </CustomBox>
  );
};

export default SettingProfile;
