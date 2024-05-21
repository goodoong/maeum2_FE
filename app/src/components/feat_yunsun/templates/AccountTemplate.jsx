import React from "react";
import ScrollContainer from "../../common/atom/ScrollContainer";
import CustomTitle from "../../common/atom/CustomTitle";
import CustomText from "../../common/atom/CustomText";
import AccountBtnBox from "../organism/AccountBtnbox";
import { styled } from "nativewind";
import { useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { testAPI } from "../../../service/user"; // testAPI를 불러옵니다.

const Box = styled(ScrollContainer);

const queryClient = new QueryClient();

const AccountTemplate = ({ navigation }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['testData'],
    queryFn: testAPI
  });

  if (isLoading) {
    return <CustomText>Loading...</CustomText>;
  }

  if (error) {
    return <CustomText>Error: {error.message}</CustomText>;
  }

  return (
    <Box className="space-y-4">
      <CustomTitle>마음의 창</CustomTitle>
      <CustomText size="sm" color="darkgray">연동할 계정을 선택해주세요</CustomText>
      <AccountBtnBox navigation={navigation} />
    </Box>
  );
};

export default AccountTemplate;