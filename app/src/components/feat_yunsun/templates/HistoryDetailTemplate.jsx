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

const Box = styled(View);

const HistoryDetailTemplate = ({ navigation, onSubmit, renderItem }) => {
  const {data, error, isLoading} = useQuery({
    queryKey: ['detail'],
    queryFn: detail,
  });

  if (isLoading) {
    return <Loading width={100} height={100} loop={true} />;
  }

  if (error) {
    return (
      <Box
        className="w-full flex-col space-y-4"
        style={{paddingLeft: scale(20)}}>
        <CustomText>Error loading data</CustomText>
      </Box>
    );
  }

  const { ai_name, child_name, date, content } = data.response;

  return (
    <Box className="flex-col space-y-4" style={{ paddingLeft: scale(20), paddingRight: scale(20) }}>
      <Box className="flex flex-row w-full justify-center">
        <CustomTitle>{date}</CustomTitle>
      </Box>
      <Box className="flex flex-row w-full justify-center" style={{ marginBottom: scale(10) }}>
        <CustomText size='sm' color='lightblack'>{date}</CustomText>
      </Box>

      {content.map((item) => (
        <React.Fragment key={item.id}>
          {/* AI */}
          <Box className="flex flex-row w-full space-x-4">
            <CustomImage source={CharacterImage} width={40} height={30} />
            <View style={{ backgroundColor: '#E0E1E9', padding: scale(10), borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
              <CustomText size='sm'>{item.ask}</CustomText>
            </View>
          </Box>
          {/* 아이 */}
          <Box className="flex flex-row-reverse w-full space-x-4">
            <ProfileImage size="sm" />
            <View style={{ backgroundColor: '#00473E', padding: scale(10), borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
              <CustomText size='sm' color='white'>{item.answer}</CustomText>
            </View>
          </Box>
        </React.Fragment>
      ))}
    </Box>
  );
};

export default HistoryDetailTemplate;
