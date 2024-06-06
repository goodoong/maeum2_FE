import React, { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import CustomText from "../../common/atom/CustomText";
import InformationForm from "../molecules/InformationForm";
import { scale } from "../../../utils/Scale";
import { mypage } from "../../../service/setting";
import Loading from "../../common/atom/Loading";


const renderItem = ({ item }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: scale(12), backgroundColor: item.color }}>
    <CustomText>{item.key}</CustomText>
    <CustomText>{item.data}</CustomText>
  </View>
);

const InformationTemplate = ({ navigation }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await mypage();
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const moveInformationFixScreen = () => {
   navigation.navigate('infofix');
   //Alert.alert("아직 개발중인 기능입니다. ")
  };

  if (!data) {
    return  <Loading width={100} height={100} loop={true} />; // 데이터를 불러오기 전 로딩 상태 표시
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
