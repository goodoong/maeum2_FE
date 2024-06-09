import React from 'react';
import { View } from 'react-native';
import { scale } from '../../../utils/Scale';
import { styled } from 'nativewind';
import CustomText from '../../common/atom/CustomText';
import CustomTitle from '../../common/atom/CustomTitle';
import ProfileImage from '../../feat_mina/molecules/ProfileImage';
import CustomImage from '../../common/atom/CustomImage';
import CharacterImage from '../../../assets/Images/CharacterImage.png';
import { detail } from '../../../service/detail';
import Loading from '../../common/atom/Loading';
import { useQuery } from '@tanstack/react-query';
import useFetchData from '../../../hooks/useFetchData';

const Box = styled(View);

const HistoryDetailTemplate = ({detailId, accessToken }) => {

  const { data, error, isLoading } = useQuery({
    queryKey: ['detail', detailId],
    queryFn: () => detail(detailId, accessToken),
  });

  return (
    <Box className="flex-col space-y-4" style={{ paddingLeft: scale(20), paddingRight: scale(20) }}>
      <Box className="flex flex-row w-full justify-center">
        <CustomTitle>{data?.date}</CustomTitle>
      </Box>
      <Box className="flex flex-row w-full justify-center" style={{ marginBottom: scale(10) }}>
        <CustomText size='sm' color='lightblack'>{data?.date}</CustomText>
      </Box>

     
        <React.Fragment key={data?.id}>
          {/* AI */}
          <Box className="flex flex-row w-full space-x-4">
            <CustomImage source={CharacterImage} width={40} height={30} />
            <View style={{ backgroundColor: '#E0E1E9', padding: scale(10), borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
              <CustomText size='sm'>{data?.ask}</CustomText>
            </View>
          </Box>
          {/* 아이 */}
          <Box className="flex flex-row-reverse w-full space-x-4">
            <ProfileImage size="sm" />
            <View style={{ backgroundColor: '#00473E', padding: scale(10), borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
              <CustomText size='sm' color='white'>{data?.answer}</CustomText>
            </View>
          </Box>
        </React.Fragment>
   
    </Box>
  );
};

export default HistoryDetailTemplate;
