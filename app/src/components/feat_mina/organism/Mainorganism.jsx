import React from 'react';
import {View, Text} from 'react-native';
import CustomTitle from '../../common/atom/CustomTitle';
import CustomText from '../../common/atom/CustomText';
import {styled} from 'nativewind';
import {scale} from '../../../utils/Scale';

// styled 함수를 사용하여 View를 스타일링한 컴포넌트 생성
const Body = styled(View);

const MainOrganism = () => {
  return (
    <Body
      className="w-full flex-col space-y-4"
      style={{paddingLeft: scale(20)}}>
      {/* 메시지 값을 서버에서 전달 받아서 출력 */}
      <CustomTitle color="pink">마음아</CustomTitle>
      <CustomText>오늘 하루도 즐겁게 보내자!</CustomText>
      <CustomText>아래 버튼을 눌러 게임을 시작해봐 ~</CustomText>
    </Body>
  );
};

export default MainOrganism;
