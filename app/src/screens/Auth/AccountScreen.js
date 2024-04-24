import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const AccountScreen = ({ route, navigation }) => {
  useEffect(() => {}, []);

  const moveSignupScreen = () => {
    navigation.push("signup1");
  };

  return (
    <View>
      <TouchableOpacity onPress={moveSignupScreen}>
        <Text>회원가입1 페이지로 이동합니다.</Text>
      </TouchableOpacity>
    </View>
  );
};
export default AccountScreen;
