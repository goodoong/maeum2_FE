import React from "react";
import { View } from "react-native";
import CustomText from "../../common/atom/CustomText";
import InformationForm from "../organism/InformationForm";
import { scale } from "../../../utils/Scale";
import { kidInformationData, guardianInformationData } from "../mocks/mockdata";

const renderItem = ({ item }) => (
  <View className="w-full flex-row justify-between items-end" style={{ padding: scale(12), backgroundColor: item.color}}>
    <CustomText>{item.key}</CustomText>
    <CustomText>{item.data}</CustomText>
  </View>
);

const Informationtemplate = ({ navigation }) => {

  //  API 연결 시 핸들러 수정 
  const moveInformationFixScreen = () => {
    navigation.navigate('infofix');
  };

  return (
    <InformationForm
      navigation={navigation}
      data={{ kidInformationData, guardianInformationData }}
      moveScreen={moveInformationFixScreen}
      isFix={true}
      renderItem={renderItem}
    />
  );
};

export default Informationtemplate;
