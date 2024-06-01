import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { scale } from '../../../utils/Scale';
import { styled } from 'nativewind';
import CustomText from '../../common/atom/CustomText';
import CustomTitle from '../../common/atom/CustomTitle';
import GameReport from '../organism/GameReport';
import FocusReport from '../organism/FocusReport';
import ReportProfile from '../organism/ReportProfile';

const Box = styled(View);

const ReportTemplate = ({ navigation, data, onSubmit, renderItem }) => {
  const [visibleReport, setVisibleReport] = useState('game'); // 기본값을 'game'으로 설정

  const handlePress = (report) => {
    setVisibleReport(report);
  };
  const moveHistoryScreen = () => {
    navigation.push('history');
  };

  return (
    <Box className="flex-col space-y-4" style={{ paddingLeft: scale(20) }}>
      <CustomTitle>발전 상황 리포트</CustomTitle>
      <ReportProfile />
      {/* 점선 */}
      <Box style={{ borderWidth: 1, borderStyle: 'dashed', borderColor: '#E0E1E9', width: '95%', marginVertical: scale(10) }} />
      <Box className="flex flex-row w-full space-x-24" style={{ paddingLeft: scale(40) }}>
        <TouchableOpacity onPress={() => handlePress('game')}>
          <CustomText size="md">게임 기록</CustomText>
          {visibleReport === 'game' && (
            <Box style={{ borderWidth: 1, borderStyle: 'solid', borderColor: '#FF7FA0', width: '90%', marginVertical: scale(10) }} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('focus')}>
          <CustomText size="md">집중도</CustomText>
          {visibleReport === 'focus' && (
            <Box style={{ borderWidth: 1, borderStyle: 'solid', borderColor: '#FF7FA0', width: '90%', marginVertical: scale(10) }} />
          )}
        </TouchableOpacity>
      </Box>
      {visibleReport === 'game' && <GameReport navigation={navigation} />}
      {visibleReport === 'focus' && <FocusReport />}
    </Box>
  );
};

export default ReportTemplate;
