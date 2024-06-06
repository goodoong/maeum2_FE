import React, { useState, useEffect } from 'react';
import CustomText from '../../common/atom/CustomText';
import Loading from '../../common/atom/Loading';
import InformationValidationForm from '../organism/InformationValidationForm';
import { kidInfoValidation, guardianInfoValidation } from '../constant/data';
import { useMutation } from '@tanstack/react-query';
import { mypagefix, mypage } from '../../../service/setting';

const InformationFixtemplate = ({ navigation }) => {
  const [initionaldata, setInitional] = useState(null);
  const [loading, setLoading] = useState(true);

  const mutation = useMutation({
    mutationFn: mypagefix,
    onSuccess: () => {
      navigation.navigate('info');
    },
    onError: (error) => {
      console.error('Error during API call', error);
    }
  });

  const onSubmit = data => {
    console.log(data);
    mutation.mutate(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await mypage();
        setInitional(response);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const validationList = [...kidInfoValidation, ...guardianInfoValidation];

  if (loading) {
    return <Loading width={100} height={100} loop={true} />;
  }

  if (!initionaldata) {
    return <CustomText>데이터를 불러오지 못했습니다.</CustomText>;
  }

  return (
    <InformationValidationForm
      navigation={navigation}
      data={initionaldata}
      validationList={validationList}
      onSubmit={onSubmit}
    />
  );
};

export default InformationFixtemplate;
