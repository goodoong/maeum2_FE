import React from "react";
import { View } from "react-native";
import CustomText from "../../common/atom/CustomText";
import InformationForm from "../molecules/InformationForm";
import { scale } from "../../../utils/Scale";
import { mockData } from "../mocks/mockdata";

const renderItem = ({ item }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: scale(12), backgroundColor: item.color }}>
    <CustomText>{item.key}</CustomText>
    <CustomText>{item.data}</CustomText>
  </View>
);

const InformationTemplate = ({ navigation }) => {
  const moveInformationFixScreen = () => {
    navigation.navigate('infofix');
  };

  return (
    <InformationForm
      navigation={navigation}
      data={mockData}
      moveScreen={moveInformationFixScreen}
      isFix={true}
      renderItem={renderItem}
    />
  );
};

export default InformationTemplate;
