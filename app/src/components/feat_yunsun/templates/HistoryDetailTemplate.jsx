// import React from 'react';
// import { View } from 'react-native';
// import { scale } from '../../../utils/Scale';
// import { styled } from 'nativewind';
// import CustomText from '../../common/atom/CustomText';
// import CustomTitle from '../../common/atom/CustomTitle';
// import ProfileImage from '../../feat_mina/molecules/ProfileImage';
// import CustomImage from '../../common/atom/CustomImage';
// import CharacterImage from '../../../assets/Images/CharacterImage.png';

// const Box = styled(View);

// const HistoryDetailTemplate = ({ navigation, data, onSubmit, renderItem }) => {
//   return (
//     <Box className="flex-col space-y-4" style={{ paddingLeft: scale(20) , paddingRight:scale(20)}}>
//       <Box className="flex flex-row w-full justify-center">
//         <CustomTitle>{date}</CustomTitle>
//       </Box>
//       <Box className="flex flex-row w-full justify-center" style={{ marginBottom: scale(10) }}>
//         <CustomText size='sm' color='lightblack'>AM 9:26</CustomText>
//       </Box>
//       {/* AI */}
//       <Box className="flex flex-row w-full space-x-4">
//         <CustomImage source={CharacterImage} width={40} height={30}/>
        
//         <View style={{ backgroundColor: '#E0E1E9', padding: scale(10), borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
//           <CustomText size='sm'>순서를 정해보자! 누가 먼저 할까?</CustomText>
//         </View>
//       </Box>
//       {/* 아이 */}
//       <Box className="flex flex-row-reverse w-full space-x-4">
//         <ProfileImage size="sm" />
//         <View style={{ backgroundColor: '#00473E', padding: scale(10), borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
//           <CustomText size='sm' color='white'>[내가먼저] 를 선택</CustomText>
//         </View>
//       </Box>
//       {/* AI */}
//        <Box className="flex flex-row w-full space-x-4">
//        <CustomImage source={CharacterImage} width={40} height={30}/>
//         <View style={{ backgroundColor: '#E0E1E9', padding: scale(10), borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
//           <CustomText size='sm'>마음이가 내는 문제를 내가 맞춰볼게!</CustomText>
//           <CustomText size='sm'>주제를 정해보자!</CustomText>
//         </View>
//       </Box>
//       {/* 아이 */}
//       <Box className="flex flex-row-reverse w-full space-x-4">
//         <ProfileImage size="sm" />
//         <View style={{ backgroundColor: '#00473E', padding: scale(10), borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
//           <CustomText size='sm' color='white'>[사물] 을 선택</CustomText>
//         </View>
//       </Box>
      
//     </Box>
//   );
// };

// export default HistoryDetailTemplate;

import React from 'react';
import {View, Text} from 'react-native';
import CustomTitle from '../../common/atom/CustomTitle';
import CustomText from '../../common/atom/CustomText';
import {styled} from 'nativewind';
import {scale} from '../../../utils/Scale';
import {useQuery} from '@tanstack/react-query';
import { detail } from '../../../service/reportchat';
import Loading from '../../common/atom/Loading';

const Body = styled(View);

const HistoryDetailTemplate = () => {
  const {data, error, isLoading} = useQuery({
    queryKey: ['detail'],
    queryFn: detail,
  });

  if (isLoading) {
    return <Loading width={100} height={100} loop={true} />;
  }

  if (error) {
    return (
      <Body
        className="w-full flex-col space-y-4"
        style={{paddingLeft: scale(20)}}>
        <CustomText>Error loading data</CustomText>
      </Body>
    );
  }

  const { date, ai_name, child_name, content } = data.response;

  return (
    <Body
      className="w-full flex-col space-y-2"
      style={{paddingLeft: scale(20)}}>
      {/* 메시지 값을 서버에서 전달 받아서 출력 */}
      <CustomTitle color="pink">{date}(이)아!</CustomTitle>
      <CustomText>{ai_name}</CustomText>
     
    </Body>
  );
};

export default HistoryDetailTemplate;
