import React from 'react';
import { useRoute } from '@react-navigation/native';
import HistoryDetailTemplate
 from '../../components/feat_yunsun/templates/HistoryDetailTemplate';
const HistoryDetailScreen = () => {
  const route = useRoute();
  const { id, token } = route.params;

  return <HistoryDetailTemplate detailId={id} accessToken={token} />;
};

export default HistoryDetailScreen;
