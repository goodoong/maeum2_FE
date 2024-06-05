import React, { useState } from 'react';
import { View } from 'react-native';
import { styled } from 'nativewind';
import ScrollContainer from '../../common/atom/ScrollContainer';
import CustomBtn from '../../common/atom/CustomBtn';
import Character from '../../common/molecules/Character';
import CustomText from '../../common/atom/CustomText';
import { moderateScale, scale, verticalScale } from '../../../utils/Scale';
import Loading from '../../common/atom/Loading';
import CustomModal from '../../common/atom/CustomModal';
import { gamequit } from '../../../service/game';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = styled(View);
const Subtitle = styled(View);

const GameTemplate = ({ subtitleText, loading, renderContent, navigation, feelingData, chance }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleQuitPress = () => {
    setModalVisible(true);
  };

  const handleConfirmQuit = async () => {
    try {
      const response = await gamequit();
      if (response.success) {
        setModalVisible(false);
        navigation.navigate('main');
      } else {
        console.error('Game quit failed', response);
      }
    } catch (error) {
      console.error('An error occurred while quitting the game', error);
    }
  };

  const handleCancelQuit = () => {
    setModalVisible(false);
  };

  const renderChances = () => {
    const hearts = [];
    for (let i = 0; i < chance; i++) {
      hearts.push(<Icon key={i} name="favorite" size={24} color="pink" />);
    }
    return hearts;
  };

  return (
    <ScrollContainer>
      <Header className="w-full flex-row justify-between">
        <CustomBtn
          size="xs"
          color="buttonlight"
          borderColor="green"
          borderWidth="true"
          title="그만할래요"
          onPress={handleQuitPress}
        />
        <View style={{ flexDirection: 'row' }}>
          {renderChances()}
        </View>
      </Header>
      <Subtitle
        style={{
          marginTop: scale(20),
          padding: scale(10),
          width: moderateScale(300, 0.3),
        }}
        className="justify-center items-center rounded-lg bg-subtitle"
      >
        <CustomText>{subtitleText}</CustomText>
      </Subtitle>
      <View style={{ width: moderateScale(500, 0.3), height: verticalScale(350) }}>
        <Character feelingdata={feelingData} />
      </View>
      {loading ? (
        <Loading width={100} height={100} loop={true} />
      ) : (
        renderContent()
      )}
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title="게임 종료"
        content="게임을 정말 종료하시겠습니까?"
        confirmText="예"
        cancelText="아니요"
        onConfirm={handleConfirmQuit}
        onCancel={handleCancelQuit}
      />
    </ScrollContainer>
  );
};

export default GameTemplate;
