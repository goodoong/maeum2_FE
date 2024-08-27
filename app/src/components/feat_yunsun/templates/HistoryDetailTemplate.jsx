import React from 'react';
import { View, FlatList } from 'react-native';
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

const HistoryDetailTemplate = ({ detailId, accessToken }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['detail', detailId],
    queryFn: () => detail(detailId, accessToken),
  });

  if (isLoading) {
    return <Loading width={100} height={100} loop={true} />;
  }

  if (error) {
    return (
      <Box>
        <CustomText>상세대화 데이터를 불러오지 못했습니다.</CustomText>
      </Box>
    );
  }

  if (!data || !data.response || !data.response.chats) {
    return (
      <Box>
        <CustomText>대화 데이터가 없습니다.</CustomText>
      </Box>
    );
  }


  const [datePart, timePart] = data.response.date.split(' ');

  const renderItem = ({ item }) => (
    <React.Fragment key={item.id}>
      {/* 아이가 질문하는 부분 */}
      <Box className="flex flex-row w-full space-x-4" style={{ marginBottom: scale(10), }}>
        <ProfileImage size="sm" />
        <View style={{ backgroundColor: '#00473E', padding: scale(10), borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
          <CustomText size='sm' color='white'>{item.ask}</CustomText>
        </View>
      </Box>
      {/* AI가 대답하는 부분 */}
      <Box className="flex flex-row-reverse w-full space-x-4" style={{ marginBottom: scale(10), }}>
        <CustomImage source={CharacterImage} width={40} height={30} />
        <View style={{ backgroundColor: '#E0E1E9', padding: scale(10), borderRadius: 15, justifyContent: 'center', alignItems: 'center', width: '80%' }}>
          <CustomText size='sm'>{item.answer}</CustomText>
        </View>
      </Box>
    </React.Fragment>
  );

  return (
    <Box className="flex-col space-y-4" style={{ paddingLeft: scale(20), paddingRight: scale(20) }}>
      <Box className="flex flex-row w-full justify-center">
        <CustomTitle>{datePart}</CustomTitle>
      </Box>
      <Box className="flex flex-row w-full justify-center" style={{ marginBottom: scale(10) }}>
        <CustomText size='sm' color='lightblack'>{timePart}</CustomText>
      </Box>

      <FlatList
        data={data.response.chats}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </Box>
  );
};

export default HistoryDetailTemplate;
