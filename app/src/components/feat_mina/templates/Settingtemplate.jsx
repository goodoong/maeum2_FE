import React from 'react';
import { Alert } from 'react-native';
import Container from '../../common/atom/Container';
import SettingProfile from '../organism/SettingProfile';
import CustomBtn from '../../common/atom/CustomBtn';
import CustomText from '../../common/atom/CustomText';
import { settingList1 } from '../constant/data';
import useModal from '../../../hooks/useModal';
import SettingList from '../organism/SettingList';
import Loading from '../../common/atom/Loading';
import useFetchData from '../../../hooks/useFetchData';
import { setting } from '../../../service/setting';
import { useLogout } from '../../../hooks/useLogout';
const Settingtemplate = ({ navigation }) => {
  const { showModal, hideModal, ModalComponent } = useModal();

  const { data, isLoading, error } = useFetchData(['setting'], async () => {
    const response = await setting();
    return response.response;
  });

  const moveReportScreen = () => {
    navigation.push('report');
  };

  const handleLogout = () => {
    showModal({
      title: '로그아웃',
      content: '정말 로그아웃 하시겠습니까?',
      confirmText: '네, 로그아웃 할래요',
      cancelText: '아니요',
      onConfirm: handleConfirmLogout,
      onCancel: hideModal,
    });
  };

  const handleConfirmLogout = async () => {
   useLogout({navigation});
   hideModal();
  };

  const handleItemPress = (item) => {
    if (item.key === '로그아웃') {
      handleLogout();
    } else {
      navigation.navigate(item.screen);
    }
  };

  if (isLoading) {
    return <Loading width={100} height={100} loop={true} />;
  }

  if (error) {
    return (
      <Container>
        <CustomText>설정 데이터를 불러오지 못했습니다.</CustomText>
      </Container>
    );
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
      <ModalComponent />
    </Container>
  );
};

export default Settingtemplate;
