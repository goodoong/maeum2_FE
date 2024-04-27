import React, { useEffect } from "react";
import AccountTemplate from "../../components/feat_yunsun/templates/AccountTemplate";
import Container from "../../components/common/atom/Container";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
const AccountScreen = ({ route, navigation }) => {
  useEffect(() => {}, []);

  const moveSignupScreen = () => {
    navigation.push("signup1");
  };

  return (
    <>
    <Container> 
    <TouchableOpacity onPress={moveSignupScreen}>
        <Text>회원가입1 페이지로 이동합니다.</Text>
      </TouchableOpacity>
    <AccountTemplate  navigation={navigation}/>
      </Container>
    </>
  );
};
export default AccountScreen;
