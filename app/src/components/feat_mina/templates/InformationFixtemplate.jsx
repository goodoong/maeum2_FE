import React from 'react';
import CustomText from '../../common/atom/CustomText';
import Loading from '../../common/atom/Loading';
import InformationValidationForm from '../organism/InformationValidationForm';
import { kidInfoValidation, guardianInfoValidation } from '../constant/data';
import { useMutation } from '@tanstack/react-query';
import { mypagefix, mypage } from '../../../service/setting';
import useFetchData from '../../../hooks/useFetchData';
import useToast from '../../../hooks/useToast';
import { useLogout } from '../../../hooks/useLogout';
import CustomToast from '../../common/atom/CustomToast';
import useModal from '../../../hooks/useModal';

const InformationFixtemplate = ({ navigation }) => {
  const { showModal, hideModal, ModalComponent } = useModal();
  const { message, visible, showToast } = useToast();

  const { data: initialData, isLoading, error } = useFetchData(['mypage'], async () => {
    const response = await mypage();
    return response;
  });

  // 데이터 전송 할 때 
  const mutation = useMutation({
    mutationFn: mypagefix,
    onSuccess: () => {
      showToast('정보 수정이 완료되었습니다.');
      setTimeout(() => {
        useLogout({navigation});
      }, 5000);
    },
    onError: (error) => {
      console.error('Error during API call', error);
      showToast('정보 수정 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  });

  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate(data);
    hideModal();
  };

  const handleCheck = (data) => {
    showModal({
      title: '회원 정보 변경',
      content: '변경이 완료되면 자동 로그아웃 됩니다.',
      confirmText: '네, 변경 할래요',
      cancelText: '안할래요',
      onConfirm: () => onSubmit(data),  // data를 인자로 전달
      onCancel: hideModal,
    });
  };

  const validationList = [...kidInfoValidation, ...guardianInfoValidation];

  if (isLoading) {
    return <Loading width={100} height={100} loop={true} />;
  }

  if (error) {
    return <CustomText>데이터를 불러오지 못했습니다.</CustomText>;
  }

  return (
    <>
      <InformationValidationForm
        navigation={navigation}
        data={initialData}
        validationList={validationList}
        onSubmit={handleCheck}
      />
      <CustomToast message={message} visible={visible} />
      <ModalComponent />
    </>
  );
};

export default InformationFixtemplate;
