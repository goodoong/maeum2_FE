import React from 'react';
import { View } from 'react-native';
import { scale } from '../../../utils/Scale';
import { styled } from 'nativewind';
import CustomText from '../../common/atom/CustomText';
import ProfileImage from '../../feat_mina/molecules/ProfileImage';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Box = styled(View);

const ReportProfile = ({ reportdata }) => {

  return (
    <Box className="flex flex-row w-full">
      <Box className="flex-col space-y-2" style={{ paddingLeft: scale(20), marginTop: scale(20) }}>
        <CustomText size="lg">아이 이름: {reportdata?.child_first_name}</CustomText>
        <CustomText size="sm" color="darkgray">이메일: {reportdata?.email}</CustomText>
        <Icon name="ios-share" size={30} color="#000000" />
      </Box>
    </Box>
  );
};

export default ReportProfile;
