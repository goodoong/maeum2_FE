import React from 'react';
import { View } from 'react-native';
import { scale } from '../../../utils/Scale';
import { styled } from 'nativewind';
import CustomText from '../../common/atom/CustomText';

import ProfileImage from '../../feat_mina/molecules/ProfileImage';
import Icon from 'react-native-vector-icons/MaterialIcons';;

const Box = styled(View);

const ReportProfile = ({ navigation, data, onSubmit, renderItem }) => {

  return (
      <Box className="flex flex-row w-full">
        <ProfileImage size="xl" />
        <Box className="flex-col space-y-2" style={{ paddingLeft: scale(20) }}>
          <CustomText size="lg">마음이</CustomText>
          <CustomText size="sm" color="darkgray">6, 여자아이</CustomText>
          <CustomText size="sm" color="darkgray">2024.3.27 기준</CustomText>
          <Icon name="ios-share" size={30} color="#000000" />
        </Box>
      </Box>
  );
};

export default ReportProfile;
