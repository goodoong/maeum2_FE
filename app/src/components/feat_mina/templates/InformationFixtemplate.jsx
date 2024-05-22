import React from 'react';
import {mockData} from '../mocks/mockdata';
import InformationValidationForm from '../organism/InformationValidationForm';
import {kidInfoValidation, guardianInfoValidation} from '../constant/data';

const InformationFixtemplate = ({navigation}) => {
  const onSubmit = data => {
    console.log(data);
    navigation.navigate('info');
  };

  // 유효성 검사 목록 합치기
  const validationList = [...kidInfoValidation, ...guardianInfoValidation];

  return (
    <InformationValidationForm
      navigation={navigation}
      data={mockData}
      validationList={validationList}
      onSubmit={onSubmit}
    />
  );
};

export default InformationFixtemplate;
