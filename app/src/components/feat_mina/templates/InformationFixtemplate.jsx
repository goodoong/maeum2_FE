import React from 'react';
import CustomText from '../../common/atom/CustomText';
import Loading from '../../common/atom/Loading';
import InformationValidationForm from '../organism/InformationValidationForm';
import { kidInfoValidation, guardianInfoValidation } from '../constant/data';
import { useMutation } from '@tanstack/react-query';
import { mypagefix, mypage } from '../../../service/setting';
import useFetchData from '../../../hooks/useFetchData';
import useToast from '../../../hooks/useToast';
import CustomToast from '../../common/atom/CustomToast';

const InformationFixtemplate = ({ navigation }) => {
  const { message, visible, showToast } = useToast(); 

  const { data: initionaldata, isLoading, error } = useFetchData(['mypage'], async () => {
    const response = await mypage();
    return response;
  });

  const mutation = useMutation({
    mutationFn: mypagefix,
    onSuccess: () => {
      showToast('정보 수정이 완료되었습니다.');
      navigation.navigate('info');
    },
    onError: (error) => {
      console.error('Error during API call', error);
      showToast('정보 수정 중 오류가 발생했습니다. 다시 시도해주세요.'); 
    }
  });

  const onSubmit = data => {
    console.log(data);
    mutation.mutate(data);
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
        data={initionaldata}
        validationList={validationList}
        onSubmit={onSubmit}
      />
      <CustomToast message={message} visible={visible} /> 
    </>
  );
};

export default InformationFixtemplate;
