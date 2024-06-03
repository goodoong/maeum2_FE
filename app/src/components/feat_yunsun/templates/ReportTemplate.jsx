import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, FlatList, ActivityIndicator, Text } from 'react-native';
import { scale } from '../../../utils/Scale';
import { styled } from 'nativewind';
import CustomText from '../../common/atom/CustomText';
import CustomTitle from '../../common/atom/CustomTitle';
import GameReport from '../organism/GameReport';
import FocusReport from '../organism/FocusReport';
import ReportProfile from '../organism/ReportProfile';
import { chat } from '../../../service/report';

const Box = styled(View);

const ReportTemplate = ({ navigation, data, onSubmit, renderItem }) => {
  const [visibleReport, setVisibleReport] = useState('game'); // 기본값을 'game'으로 설정
  const [gameData, setGameData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);

  const handlePress = (report) => {
    setVisibleReport(report);
  };

  const moveHistoryScreen = () => {
    navigation.push('history');
  };

  const loadGameData = async (page) => {
    if (!hasMoreData) return;
    
    setLoading(true);
    try {
      const newData = await chat(page);
      if (newData.length === 0) {
        setHasMoreData(false);
      } else {
        setGameData((prevData) => [...prevData, ...newData]);
      }
    } catch (error) {
      console.error('Error fetching game data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadGameData(page);
  }, [page]);

  const handleLoadMore = () => {
    if (hasMoreData && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const renderGameReport = ({ item }) => <GameReport navigation={navigation} data={item} />;

  return (
    <Box className="flex-col space-y-4" style={{ paddingLeft: scale(20) }}>
      <CustomTitle>발전 상황 리포트</CustomTitle>
      <ReportProfile />
      {/* 점선 */}
      <Box style={{ borderWidth: 1, borderStyle: 'dashed', borderColor: '#E0E1E9', width: '95%', marginVertical: scale(10) }} />
      <Box className="flex flex-row w-full space-x-24" style={{ paddingLeft: scale(60) }}>
        <TouchableOpacity onPress={() => handlePress('game')}>
          <CustomText size="md">게임 기록</CustomText>
          {visibleReport === 'game' && (
            <Box style={{ borderWidth: 1, borderStyle: 'solid', borderColor: '#FF7FA0', width: '90%' }} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('focus')}>
          <CustomText size="md">집중도</CustomText>
          {visibleReport === 'focus' && (
            <Box style={{ borderWidth: 1, borderStyle: 'solid', borderColor: '#FF7FA0', width: '90%', marginVertical: scale(10) }} />
          )}
        </TouchableOpacity>
      </Box>
      {visibleReport === 'game' && (
        <FlatList
          data={gameData}
          renderItem={renderGameReport}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
          ListEmptyComponent={!loading &&  
          <Box className="justify-center items-center"style={{ marginTop: scale(40) }}>
          <CustomText size="lg">게임기록이 없습니다</CustomText>
           </Box>}
        />
      )}
      {visibleReport === 'focus' && <FocusReport />}
    </Box>
  );
};

export default ReportTemplate;
