import React, { useState } from 'react';
import { FlatList, TouchableOpacity, Alert } from 'react-native';
import { styled } from 'nativewind';
import Container from '../../common/atom/Container';
import SettingProfile from '../organism/SettingProfile';
import CustomBtn from '../../common/atom/CustomBtn';
import CustomText from '../../common/atom/CustomText';
import { scale, moderateScale } from '../../../utils/Scale';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { settingList1 } from '../constant/data';
import CustomModal from '../../common/atom/CustomModal';

const List = styled(FlatList);
const ListContent = styled(TouchableOpacity);

const Settingtemplate = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const moveReportScreen = () => {
    navigation.push('report');
  };

  const handleLogout = () => {
    setModalVisible(true);
  };

  const handleConfirmLogout = () => {
    Alert.alert('Logged out successfully!');
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <ListContent
    // icon이랑 text 가로 여백 조정 필요, space 적용 안되는 문제 
      className="flex-row space-x-10"
      style={{ marginBottom: scale(30) }}
      onPress={() => {
        if (item.key === '로그아웃') {
          handleLogout();
        } else {
          navigation.navigate(item.screen);
        }
      }}>
      <Icon size={moderateScale(20)}>{item.icon}</Icon>
      <CustomText>{item.key}</CustomText>
    </ListContent>
  );

  return (
    <Container>
      <SettingProfile />
      <CustomBtn
        size="lg"
        color="buttonpink"
        rounded={true}
        title="발전 현황 리포트"
        onPress={moveReportScreen}
      />
      <List className="w-full mt-10" data={settingList1} renderItem={renderItem} />
      <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </Container>
  );
};

export default Settingtemplate;