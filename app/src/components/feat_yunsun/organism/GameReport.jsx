import React from 'react';
import { Alert, View } from 'react-native';
import { styled } from 'nativewind';
import CustomText from '../../common/atom/CustomText';
import GameResultText from '../atom/GameResultText';
import CustomBtn from '../../common/atom/CustomBtn';
import { scale } from '../../../utils/Scale';

const Box = styled(View);

const GameReport = ({ navigation, date, time, issolved,name}) => {

  const moveHistoryScreen = () => {
    //navigation.push('history');
    Alert.alert("아직 개발중인 기능입니다. 잠시만 기다려주세요!")
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
      {issolved ? (
          <CustomText>{name}(이)가 정답을 맞췄어요!</CustomText>
        ) : (
          <CustomText>{name}(이)가 정답을 맞추지 못했어요.</CustomText>
        )}
        <CustomBtn size='xs' color='buttonwhite' borderColor='yellow' borderWidth='true' title='상세보기' onPress={moveHistoryScreen} />
      </Box>
      <Box style={{ borderWidth: 1, borderStyle: 'solid', borderColor: '#E0E1E9', width: '95%', marginBottom: scale(15) }} />
    </Box>
  );
};

export default GameReport;
