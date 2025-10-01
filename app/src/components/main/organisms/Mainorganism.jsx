import React from 'react';
import { View } from 'react-native';
import CustomTitle from '../../common/atom/CustomTitle';
import CustomText from '../../common/atom/CustomText';
import { styled } from 'nativewind';
import { scale } from '../../../utils/Scale';
import useFetchData from '../../../hooks/useFetchData';
import { mainapi } from '../../../service/main';
import Loading from '../../common/atom/Loading';

const Body = styled(View);

const MainOrganism = () => {
  const { data, error, isLoading } = useFetchData(['mainapi'], mainapi);

  if (isLoading) {
    return <Loading width={100} height={60} loop={true} />;
  }

  if (error) {
    return (
      <Body
        className="w-full flex-col space-y-4"
        style={{ paddingLeft: scale(20) }}
      >
        <CustomText>사용자의 정보를 불러오지 못했어요!</CustomText>
        <CustomText>다시 시도해보세요</CustomText>
      </Body>
    );
  }

  const { child_first_name, message } = data.response;

  return (
    <Body
      className="w-full flex-col space-y-2"
      style={{ paddingLeft: scale(20) }}
    >
      <CustomTitle color="pink">{child_first_name}(이)아!</CustomTitle>
      <CustomText>{message}</CustomText>
      <CustomText>아래 버튼을 눌러 게임을 시작해봐</CustomText>
    </Body>
  );
};

export default MainOrganism;
