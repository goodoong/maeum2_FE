import React from 'react';
import { View } from 'react-native';
import { styled } from 'nativewind';
import CustomText from '../../common/atom/CustomText';
import GameResultText from '../atom/GameResultText';
import CustomBtn from '../../common/atom/CustomBtn';
import { scale } from '../../../utils/Scale';

const Box = styled(View);

const GameReport = ({ navigation, data, onSubmit, renderItem }) => {
    // const moveGameReportScreen = () => {
    //     navigation.push('gamereport');
    //   };
     // const moveFocusReportScreen = () => {
    //     navigation.push('focusreport');
    //   };


  return (
      <Box className="flex flex-col content-center space-y-4" style={{width: '95%', height:'50%', marginTop:scale(20)}}>

         {/* 날짜 */}
         <CustomText size='md'>2024.03.26</CustomText> 

        <Box className="flex flex-row w-full justify-between">
        {/* 결과 */}
       <GameResultText color='green' title={'성공'}/>
        {/* <GameResultText color='pink' title={'실패'}/> */}
        {/* 시간 */}
        <CustomText size='sm' color='darkgray'>AM 9:26</CustomText>
        </Box>

        <Box className="flex flex-row w-full justify-between">
        <CustomText size='sm'>마음이가 3번 만에 답을 맞췄어요.</CustomText>
        <CustomBtn size='s' color='buttonwhite' borderColor='yellow' borderWidth='true' title='상세보기'/>
        </Box>
      </Box>
  );
};

export default GameReport;
