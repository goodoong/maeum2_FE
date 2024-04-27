import React from "react";
import CustomTitle from "../../common/atom/CustomTitle";
import Container from "../../common/atom/Container";
import { View, Text, SectionList } from "react-native"; 
import { styled } from "nativewind";
import CustomBtn from "../../common/atom/CustomBtn";
import CustomText from "../../common/atom/CustomText";
import { scale } from "../../../utils/Scale";
import ProfileImage from "../molecules/ProfileImage";
import { kidInformationData } from "../mocks/mockdata";
import { guardianInformationData } from "../mocks/mockdata";

const Header = styled(View);
const Section = styled(View);
const SectionHeader = styled(Text)


const renderItem = ({ item }) => (
  <Section className="w-full flex-row justify-between items-end" style={{ padding: scale(20) }}>
    <CustomText>{item.key}</CustomText>
    <CustomText>{item.data}</CustomText>
  </Section>
);

const Informationtemplate = ({ navigation }) => {
  return (
    <>
      <Container>
        {/* 타이틀 */}
        <Header className="w-full flex-row" style={{ marginBottom: scale(20) }}>
          <CustomTitle>회원 정보</CustomTitle>
        </Header>
        {/* 섹션 1 */}
        <Section className="w-full flex-row justify-between items-end" style={{ padding: scale(6) }}>
          <ProfileImage size="lg" />
          <CustomBtn
            size="xs"
            color="buttonpink"
            rounded={true}
            title="수정"
          />
        </Section>
        <SectionList
          sections={[
            { data: kidInformationData },
            { title: '보호자 정보', data: guardianInformationData }
          ]}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
          renderSectionHeader={({ section: { title } }) => (
            <SectionHeader className={title ? 'mt-10 bg-slate-100' : ''}>
              <CustomText>{title}</CustomText>
            </SectionHeader>
          )}          
        />
      </Container>
    </>
  );
};

export default Informationtemplate;
