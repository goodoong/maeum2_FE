import React from 'react';
import { View } from 'react-native';
import { scale } from '../../../utils/Scale';
import { styled } from 'nativewind';
import CustomText from '../../common/atom/CustomText';


const Box = styled(View);

const GameReport = ({ navigation, data, onSubmit, renderItem }) => {

  return (
    <Box className="flex-col space-y-4" style={{ paddingLeft: scale(20) }}>
    {/* 날짜 */}
  <CustomText size="md">2024.03.26</CustomText>


    </Box>
  );
};

export default GameReport;
