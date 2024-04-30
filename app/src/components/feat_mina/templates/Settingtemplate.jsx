import React, { useState } from 'react';
import { FlatList, TouchableOpacity, Alert } from 'react-native';
import { styled } from 'nativewind';
import Container from '../../common/atom/Container';
import SettingProfile from '../organism/SettingProfile';
import CustomBtn from '../../common/atom/CustomBtn';
import CustomText from '../../common/atom/CustomText';
import { moderateScale } from '../../../utils/Scale';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { settingList1 } from '../constant/data';
import CustomModal from '../../common/atom/CustomModal';

const List = styled(FlatList);
const ListContent = styled(TouchableOpacity);

const Settingtemplate = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');
  const [modalConfirmText, setModalConfirmText] = useState('');
  const [modalCancelText, setModalCancelText] = useState('');

  const moveReportScreen = () => {
    navigation.push('report');
  };

  const handleLogout = () => {
    setModalTitle('로그아웃');
    setModalContent('정말 로그아웃 하시겠습니까?');
    setModalConfirmText('네, 로그아웃 할래요');
    setModalCancelText('아니요');
    setModalVisible(true);
  };

  const handleConfirmLogout = () => {
    Alert.alert('Logged out successfully!');
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <ListContent
      className="flex-row space-x-6"
      style={{ marginBottom: moderateScale(30) }}
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
      <List
        className="w-full mt-10"
        data={settingList1}
        renderItem={renderItem}
      />
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={modalTitle}
        content={modalContent}
        confirmText={modalConfirmText}
        cancelText={modalCancelText}
      />
    </Container>
  );
};

export default Settingtemplate;
