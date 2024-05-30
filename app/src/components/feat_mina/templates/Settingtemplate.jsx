import React, { useState } from "react";
import { Alert } from 'react-native';
import Container from '../../common/atom/Container';
import SettingProfile from "../organism/SettingProfile";
import CustomBtn from '../../common/atom/CustomBtn';
import CustomText from '../../common/atom/CustomText';
import { settingList1 } from '../constant/data';
import CustomModal from '../../common/atom/CustomModal';
import SettingList from "../organism/SettingList";
import useFetchSetting from "../../../hooks/useFetchSetting";

const Settingtemplate = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { data, loading } = useFetchSetting();

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

  const handleItemPress = (item) => {
    if (item.key === '로그아웃') {
      handleLogout();
    } else {
      navigation.navigate(item.screen);
    }
  };

  if (loading) {
    return <CustomText>Loading...</CustomText>; // 데이터를 불러오기 전 로딩 상태 표시
  }

  return (
    <Container>
      <SettingProfile data={data} />
      <CustomBtn
        size="lg"
        color="buttonpink"
        rounded={true}
        title="발전 현황 리포트"
        onPress={moveReportScreen}
      />
      <SettingList data={settingList1} onItemPress={handleItemPress} />
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title="로그아웃"
        content="정말 로그아웃 하시겠습니까?"
        confirmText="네, 로그아웃 할래요"
        cancelText="아니요"
        onConfirm={handleConfirmLogout}
      />
    </Container>
  );
};

export default Settingtemplate;
