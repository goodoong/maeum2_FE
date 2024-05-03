import React, { useState } from "react";
import { View, VirtualizedList } from "react-native";
import { styled } from "nativewind";
import CustomTitle from "../../common/atom/CustomTitle";
import Container from "../../common/atom/Container";
import CustomBtn from "../../common/atom/CustomBtn";
import ProfileImage from "../molecules/ProfileImage";
import CustomText from "../../common/atom/CustomText";
import { scale } from "../../../utils/Scale";
import { kidInformationData } from "../mocks/mockdata";
import { guardianInformationData } from "../mocks/mockdata";
import CustomInput from "../../common/atom/CustomInput";

const Header = styled(View);
const Section = styled(View);

const InformationFixtemplate = ({ navigation }) => {
  const moveInformationScreen = () => {
    navigation.navigate("info");
  };

  const renderItem = ({ item }) => {
    if (item.key === "아이 정보" || item.key === "보호자 정보") {
      return (
        <Section
          className="w-full flex-row"
          style={{ padding: scale(12), marginBottom: scale(6), backgroundColor: item.color }}
        >
          <CustomText>{item.key}</CustomText>
        </Section>
      );
    } else {
      return (
        <Section
          className="w-full flex-row justify-center items-center"
        >
          <CustomInput
            keyboardType="default"
            placeholder={item.key}
            value={item.data}
          />
        </Section>
      );
    }
  };

  return (
    <Container>
      <Section style={{ marginBottom: scale(20) }}>
        <VirtualizedList
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
          getItemCount={() =>
            kidInformationData.length + guardianInformationData.length + 2
          }
          getItem={(data, index) => {
            if (index === 0) {
              return { key: "아이 정보", data: "", color: "whitesmoke" };
            } else if (index < kidInformationData.length + 1) {
              return kidInformationData[index - 1];
            } else if (index === kidInformationData.length + 1) {
              return { key: "보호자 정보", data: "", color: "whitesmoke" };
            } else {
              const guardianIndex = index - kidInformationData.length - 2;
              return guardianInformationData[guardianIndex];
            }
          }}
          ListHeaderComponent={
            <>
              {/* 타이틀 */}
              <Header
                className="w-full flex-row"
                style={{ marginBottom: scale(16) }}
              >
                <CustomTitle>회원 정보</CustomTitle>
              </Header>
              {/* 섹션 */}
              <Section
                className="w-full flex-row justify-between items-end"
                style={{ padding: scale(6) }}
              >
                <ProfileImage size="lg" />
                <CustomBtn
                  size="xs"
                  color="buttonpink"
                  rounded={true}
                  title="저장"
                  onPress={moveInformationScreen}
                />
              </Section>
            </>
          }
          ListHeaderComponentStyle={{ marginBottom: scale(20) }}
        />
      </Section>
    </Container>
  );
};

export default InformationFixtemplate;
