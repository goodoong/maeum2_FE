import React from 'react';
import {View, Text} from 'react-native';
import CustomTitle from '../../common/atom/CustomTitle';
import CustomText from '../../common/atom/CustomText';
import {styled} from 'nativewind';
import {scale} from '../../../utils/Scale';
import {useQuery} from '@tanstack/react-query';
import {mainapi} from '../../../service/main';
import Loading from '../../common/atom/Loading';

const Body = styled(View);

const MainOrganism = () => {
  const {data, error, isLoading} = useQuery({
    queryKey: ['mainapi'],
    queryFn: mainapi,
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

  const {child_first_name, message} = data.response;

  return (
    <Body
      className="w-full flex-col space-y-4"
      style={{paddingLeft: scale(20)}}>
      {/* 메시지 값을 서버에서 전달 받아서 출력 */}
      <CustomTitle color="pink">{child_first_name}(이)아!</CustomTitle>
      <CustomText>{message}</CustomText>
      {/* 이건 디폴트 */}
      <CustomText>아래 버튼을 눌러 게임을 시작해봐</CustomText>
    </Body>
  );
};

export default MainOrganism;
