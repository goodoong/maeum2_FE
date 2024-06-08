import React from "react";
import { Alert, View } from "react-native";
import CustomText from "../../common/atom/CustomText";
import InformationForm from "../molecules/InformationForm";
import { scale } from "../../../utils/Scale";
import { mypage } from "../../../service/setting";
import Loading from "../../common/atom/Loading";
import useFetchData from "../../../hooks/useFetchData";

const renderItem = ({ item }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: scale(12), backgroundColor: item.color }}>
    <CustomText>{item.key}</CustomText>
    <CustomText>{item.data}</CustomText>
  </View>
);

const InformationTemplate = ({ navigation }) => {
  const { data, isLoading, error } = useFetchData(['mypage'], async () => {
    const response = await mypage();
    return response;
  });

  const moveInformationFixScreen = () => {
    navigation.navigate('infofix');
  };

  if (isLoading) {
    return <Loading width={100} height={100} loop={true} />;
  }

  if (error) {
    return (
      <View style={{ padding: scale(12) }}>
        <CustomText>데이터를 불러오는 중에 오류가 발생했습니다.</CustomText>
      </View>
    );
  }

  return (
    <InformationForm
      navigation={navigation}
      data={data}
      moveScreen={moveInformationFixScreen}
      isFix={true}
      renderItem={renderItem}
    />
  );
};

export default InformationTemplate;
