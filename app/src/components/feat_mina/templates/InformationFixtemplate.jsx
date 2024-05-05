import React from 'react';
import {View} from 'react-native';
import CustomInput from '../../common/atom/CustomInput';
import CustomText from '../../common/atom/CustomText';
import InformationForm from '../organism/InformationForm';
import RadioButton from '../../common/atom/RadioButton';
import {scale} from '../../../utils/Scale';
import {kidInformationData} from '../mocks/mockdata';
import {guardianInformationData} from '../mocks/mockdata';

const renderItem = ({item, index}) => {
  if (item.key === '아이 정보' || item.key === '보호자 정보') {
    return (
      <View
        className="w-full flex-row"
        style={{
          padding: scale(12),
          marginBottom: scale(6),
          backgroundColor: item.color,
        }}>
        <CustomText>{item.key}</CustomText>
      </View>
    );
  } else if (item.key === '성별') {
    console.log(item.data);
    return (
      <View
        className="w-full flex-row justify-center items-center"
        style={{
          padding: scale(12),
          marginBottom: scale(6),
          backgroundColor: item.color,
        }}>
        <RadioButton
          options={['남', '여']}
          onChange={selectedOption => console.log(selectedOption)}
          initialValue={item.data}
        />
      </View>
    );
  } else {
    return (
      <View className="w-full flex-row justify-center items-center">
        <CustomInput
          keyboardType="default"
          placeholder={item.key}
          value={item.data}
          autoFocus={index === 1}
        />
      </View>
    );
  }
};

const InformationFixtemplate = ({navigation}) => {
  //  API 연결 시 핸들러 수정
  const moveInformationScreen = () => {
    navigation.navigate('info');
  };

  return (
    <InformationForm
      navigation={navigation}
      data={{kidInformationData, guardianInformationData}}
      moveScreen={moveInformationScreen}
      isFix={false}
      renderItem={renderItem}
    />
  );
};

export default InformationFixtemplate;
