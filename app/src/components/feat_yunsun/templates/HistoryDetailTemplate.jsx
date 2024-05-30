import React from 'react';
import { View } from 'react-native';
import { scale } from '../../../utils/Scale';
import { styled } from 'nativewind';
import CustomText from '../../common/atom/CustomText';
import CustomTitle from '../../common/atom/CustomTitle';
import ProfileImage from '../../feat_mina/molecules/ProfileImage';
import CustomImage from '../../common/atom/CustomImage';
import CharacterImage from '../../../assets/Images/CharacterImage.png';

const Box = styled(View);

const HistoryDetailTemplate = ({ navigation, data, onSubmit, renderItem }) => {
  return (
    <Box className="flex-col space-y-4" style={{ paddingLeft: scale(20) , paddingRight:scale(20)}}>
      <Box className="flex flex-row w-full justify-center">
        <CustomTitle>2024.03.26</CustomTitle>
      </Box>
      <Box className="flex flex-row w-full justify-center" style={{ marginBottom: scale(10) }}>
        <CustomText size='sm' color='lightblack'>AM 9:26</CustomText>
      </Box>
      {/* AI */}
      <Box className="flex flex-row w-full space-x-4">
        <CustomImage source={CharacterImage} width={40} height={30}/>
        
        <View style={{ backgroundColor: '#E0E1E9', padding: scale(10), borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
          <CustomText size='sm'>순서를 정해보자! 누가 먼저 할까?</CustomText>
        </View>
      </Box>
      {/* 아이 */}
      <Box className="flex flex-row-reverse w-full space-x-4">
        <ProfileImage size="sm" />
        <View style={{ backgroundColor: '#00473E', padding: scale(10), borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
          <CustomText size='sm' color='white'>[내가먼저] 를 선택</CustomText>
        </View>
      </Box>
      {/* AI */}
       <Box className="flex flex-row w-full space-x-4">
       <CustomImage source={CharacterImage} width={40} height={30}/>
        <View style={{ backgroundColor: '#E0E1E9', padding: scale(10), borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
          <CustomText size='sm'>마음이가 내는 문제를 내가 맞춰볼게!</CustomText>
          <CustomText size='sm'>주제를 정해보자!</CustomText>
        </View>
      </Box>
      {/* 아이 */}
      <Box className="flex flex-row-reverse w-full space-x-4">
        <ProfileImage size="sm" />
        <View style={{ backgroundColor: '#00473E', padding: scale(10), borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
          <CustomText size='sm' color='white'>[사물] 을 선택</CustomText>
        </View>
      </Box>
      
    </Box>
  );
};

export default HistoryDetailTemplate;
