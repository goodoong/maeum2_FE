import React from 'react';
import { InformationList } from '../constant/data';
import { mockData } from '../mocks/mockdata';
import InformationValidationForm from '../organism/InformationValidationForm';

const InformationFixtemplate = ({ navigation }) => {
  
  const onSubmit = data => {
    console.log(data); 
    navigation.navigate('info');
  };

  return (
    <InformationValidationForm
      navigation={navigation}
      data={mockData}
      validationList = {InformationList}
      onSubmit={onSubmit}
    />
  );
};

export default InformationFixtemplate;
