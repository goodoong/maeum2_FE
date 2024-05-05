import React from 'react';
import {View, VirtualizedList} from 'react-native';
import {styled} from 'nativewind';
import CustomTitle from '../../common/atom/CustomTitle';
import Container from '../../common/atom/Container';
import CustomBtn from '../../common/atom/CustomBtn';
import ProfileImage from '../molecules/ProfileImage';
import {scale} from '../../../utils/Scale';

const Header = styled(View);
const Section = styled(View);

const InformationForm = ({navigation, data, moveScreen, isFix, renderItem}) => {
  // 아이 정보와 보호자 정보를 합친 전체 정보 배열
  const allInformationData = [
    {key: '아이 정보', data: '', color: 'whitesmoke'},
    ...data.kidInformationData,
    {key: '보호자 정보', data: '', color: 'whitesmoke'},
    ...data.guardianInformationData,
  ];

  return (
    <Container>
      <Section style={{marginBottom: scale(20)}}>
        <VirtualizedList
          renderItem={renderItem}
          keyExtractor={item => item.key}
          getItemCount={() => allInformationData.length} // 전체 정보 배열의 길이 반환
          getItem={(data, index) => allInformationData[index]} // 전체 정보 배열에서 해당 인덱스의 항목 반환
          ListHeaderComponent={
            <>
              <Header
                className="w-full flex-row"
                style={{marginBottom: scale(16)}}>
                <CustomTitle>회원 정보</CustomTitle>
              </Header>
              <Section
                className="w-full flex-row justify-between items-end"
                style={{padding: scale(6)}}>
                <ProfileImage size="lg" />
                <CustomBtn
                  size="xs"
                  color="buttonpink"
                  rounded={true}
                  title={isFix ? '수정' : '저장'}
                  onPress={moveScreen}
                />
              </Section>
            </>
          }
          ListHeaderComponentStyle={{marginBottom: scale(20)}}
        />
      </Section>
    </Container>
  );
};

export default InformationForm;
