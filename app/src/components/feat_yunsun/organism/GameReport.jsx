import React from 'react';
import { View } from 'react-native';
import { styled } from 'nativewind';
import CustomText from '../../common/atom/CustomText';
import GameResultText from '../atom/GameResultText';
import CustomBtn from '../../common/atom/CustomBtn';
import { scale } from '../../../utils/Scale';

const Box = styled(View);

const GameReport = ({ navigation, date, time, issolved }) => {
  const moveHistoryScreen = () => {
    navigation.push('history');
  };

  return (
    <Box className="flex flex-col content-center space-y-4" style={{ width: '95%' }}>
      {/* 날짜 */}
      <CustomText size='md'>{date}</CustomText>

      <Box className="flex flex-row w-full justify-between">
        {/* 결과 */}
        {issolved ? (
          <GameResultText color='green' title={'성공'} />
        ) : (
          <GameResultText color='pink' title={'실패'} />
        )}
        {/* 시간 */}
        <CustomText size='sm' color='darkgray'>{time}</CustomText>
      </Box>
      <Box className="flex flex-row w-full justify-between">
        <CustomText size='sm'>마음이가 3번 만에 답을 맞췄어요.</CustomText>
        <CustomBtn size='xs' color='buttonwhite' borderColor='yellow' borderWidth='true' title='상세보기' onPress={moveHistoryScreen} />
      </Box>
      <Box style={{ borderWidth: 1, borderStyle: 'solid', borderColor: '#E0E1E9', width: '95%', marginBottom:scale(15) }} />
    </Box>
  );
};

export default GameReport;
