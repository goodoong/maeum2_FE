import React, { useState } from 'react';
import { TouchableOpacity, View, FlatList, ActivityIndicator } from 'react-native';
import { scale } from '../../../utils/Scale';
import { styled } from 'nativewind';
import CustomText from '../../common/atom/CustomText';
import CustomTitle from '../../common/atom/CustomTitle';
import GameReport from '../organism/GameReport';
import FocusReport from '../organism/FocusReport';
import ReportProfile from '../organism/ReportProfile';
import { chat } from '../../../service/report';
import { useInfiniteQuery } from '@tanstack/react-query';

const Box = styled(View);

const ReportTemplate = ({ navigation }) => {
  const [visibleReport, setVisibleReport] = useState('game'); // 기본값을 'game'으로 설정

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['chats'],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await chat({ pageParam });
      return {
        content: response.content,
        nextPage: response.hasNextPage ? pageParam + 1 : undefined,
      };
    },
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  const handlePress = (report) => {
    setVisibleReport(report);
  };

  const renderGameReport = ({ item }) => {
    if (!item) {
      return null;
    }
    return <GameReport navigation={navigation} date={item.date} time={item.time} />;
  };

  return (
    <Box className="flex-1" style={{ paddingLeft: scale(20), paddingRight: scale(20) }}>
      <CustomTitle>발전 상황 리포트</CustomTitle>
      <ReportProfile />
      {/* 점선 */}
      <Box style={{ borderWidth: 1, borderStyle: 'dashed', borderColor: '#E0E1E9', width: '100%', marginVertical: scale(10) }} />
      <Box className="flex flex-row w-full space-x-24" style={{ paddingLeft: scale(60), marginBottom: scale(20) }}>
        <TouchableOpacity onPress={() => handlePress('game')}>
          <CustomText size="md">게임 기록</CustomText>
          {visibleReport === 'game' && (
            <Box style={{ borderWidth: 1, borderStyle: 'solid', borderColor: '#FF7FA0', width: '90%' }} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('focus')}>
          <CustomText size="md">집중도</CustomText>
          {visibleReport === 'focus' && (
            <Box style={{ borderWidth: 1, borderStyle: 'solid', borderColor: '#FF7FA0', width: '90%' }} />
          )}
        </TouchableOpacity>
      </Box>
      
        {visibleReport === 'game' && (
          <>
            {status === 'loading' && <ActivityIndicator size="large" color="#0000ff" />}
            {status === 'error' && <CustomText>Error fetching data: {error.message}</CustomText>}
            {status === 'success' && (
              <>
                {data.pages.flatMap((page) => page.content).length === 0 ? (
                  <CustomText>기록이 없습니다.</CustomText>
                ) : (
                  <FlatList
                    data={data.pages.flatMap((page) => page.content)}
                    renderItem={renderGameReport}
                    keyExtractor={(item) => item.id.toString()}
                    onEndReachedThreshold={0.6}
                    onEndReached={() => {
                      if (!isFetchingNextPage && hasNextPage) {
                        fetchNextPage();
                      }
                    }}
                    ListFooterComponent={isFetchingNextPage ? <ActivityIndicator size="large" color="#0000ff" /> : null}
                  />
                )}
              </>
            )}
          </>
        )}
        {visibleReport === 'focus' && <FocusReport />}
      </Box>
   
  );
};

export default ReportTemplate;
