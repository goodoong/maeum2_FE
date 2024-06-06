import React, { useState } from 'react';
import { TouchableOpacity, View, FlatList, ActivityIndicator } from 'react-native';
import { scale } from '../../../utils/Scale';
import { styled } from 'nativewind';
import CustomText from '../../common/atom/CustomText';
import CustomTitle from '../../common/atom/CustomTitle';
import GameReport from '../organism/GameReport';
import FocusReport from '../organism/FocusReport';
import ReportProfile from '../organism/ReportProfile';
import { useInfiniteQuery } from '@tanstack/react-query';
import Loading from '../../common/atom/Loading';
import useFetchReport from '../../../hooks/useFetchReport';
import { chat } from '../../../service/report';

const Box = styled(View);

const ReportTemplate = ({ navigation }) => {
  const [visibleReport, setVisibleReport] = useState('game');
  const {reportdata, loading} = useFetchReport();
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
        solvedRate: response.solved_rate, // solved_rate 추가
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
    return <GameReport navigation={navigation} date={item.date} time={item.time} issolved={item.isSolved} />;
  };

  const solvedRate = data?.pages[0]?.solvedRate || 0; // solved_rate를 변수로 저장
  if (loading) {
    return <Loading width={100} height={100} loop={true} />;
  }

  return (
    <Box className="flex-1" style={{ paddingLeft: scale(20), paddingRight: scale(20) }}>
      <CustomTitle>발전 상황 리포트</CustomTitle>
      {/* 아이 프로필 */}
      <ReportProfile reportdata={reportdata} />

      <Box style={{ borderWidth: 1, borderStyle: 'dashed', borderColor: '#E0E1E9', width: '100%', marginVertical: scale(10) }} />
      <Box className="flex flex-row w-full space-x-24" style={{ paddingLeft: scale(60), marginBottom: scale(20) }}>

        <TouchableOpacity onPress={() => handlePress('game')}>
          <CustomText size="md">게임 기록</CustomText>
          {visibleReport === 'game' && (
            <Box style={{ borderWidth: 1, borderStyle: 'solid', borderColor: '#FF7FA0', width: '90%' }} />
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePress('focus')}>
          <CustomText size="md">정답률</CustomText>
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
      {visibleReport === 'focus' && <FocusReport solvedRate={solvedRate} />}
    </Box>
  );
};

export default ReportTemplate;
