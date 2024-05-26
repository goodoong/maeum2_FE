import React from 'react';
import { View } from 'react-native';
import { scale } from '../../../utils/Scale';
import { styled } from 'nativewind';
import CustomText from '../../common/atom/CustomText';
import CustomTitle from '../../common/atom/CustomTitle';
import ProfileImage from '../../feat_mina/molecules/ProfileImage';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Box = styled(View);

const DashedLine = () => {
  return (
    <Box style={{ 
      borderWidth: 1, 
      borderStyle: 'dashed', 
      borderColor: '#E0E1E9', 
      width: '95%', 
      marginVertical: scale(10) 
    }} />
  );
};

const ReportProfile = ({ navigation, data, onSubmit, renderItem }) => {

  return (
    <Box className="flex-col space-y-4" style={{ paddingLeft: scale(20) }}>
      <CustomTitle>발전 상황 리포트</CustomTitle>
      <Box className="flex flex-row w-full">
        <ProfileImage size="xl" />
        <Box className="flex-col space-y-2" style={{ paddingLeft: scale(20) }}>
          <CustomText size="lg">마음이</CustomText>
          <CustomText size="sm" color="darkgray">6, 여자아이</CustomText>
            <CustomText size="sm" color="darkgray">2024.3.27 기준</CustomText>
            <Icon name="ios-share" size={30} color="#000000" />
        </Box>
      </Box>
      {/* 점선 */}
      <Box style={{ borderWidth: 1, borderStyle: 'dashed', borderColor: '#E0E1E9', width: '95%', marginVertical: scale(10) }}/>
      <Box className="flex flex-row w-full space-x-24" style={{ paddingLeft: scale(40) }}>
      <CustomText size="md">게임 기록</CustomText>
      <CustomText size="md">집중도</CustomText>
      </Box>
    </Box>
  );
};

export default ReportProfile;
