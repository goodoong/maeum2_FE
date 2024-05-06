import React from 'react';
import { InformationList } from '../constant/data';
import { kidInformationData } from '../mocks/mockdata';
import { guardianInformationData } from '../mocks/mockdata';
import InformationValidationForm from '../organism/InformationValidationForm';

const InformationFixtemplate = ({ navigation }) => {
  
  const onSubmit = data => {
    console.log(data); 
    navigation.navigate('info');
  };

  return (
    <InformationValidationForm
      navigation={navigation}
      data={{ kidInformationData, guardianInformationData, InformationList }}
      onSubmit={onSubmit}
    />
  );
};

export default InformationFixtemplate;
