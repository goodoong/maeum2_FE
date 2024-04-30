import React from "react";
import { View, Text, FlatList } from "react-native"; 
import { styled } from "nativewind";
import CustomText from "../../common/atom/CustomText";
import { scale } from "../../../utils/Scale";

const Section = styled(View);
const SectionHeader = styled(Text);

const renderItem = ({ item }) => (
  <Section className="w-full flex-row justify-between items-end" style={{ padding: scale(20) }}>
    <CustomText>{item.key}</CustomText>
    <CustomText>{item.data}</CustomText>
  </Section>
);

const InformationForm = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => item + index}
      renderItem={renderItem}
      ListHeaderComponent={() => (
        <SectionHeader className="mt-10 bg-slate-100">
          <CustomText>보호자 정보</CustomText>
        </SectionHeader>
      )}
    />
  );
};

export default InformationForm;
