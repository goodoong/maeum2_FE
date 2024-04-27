import React from "react";
import Container from "../../common/atom/Container";
import CustomTitle from "../../common/atom/CustomTitle";
import CustomText from "../../common/atom/CustomText";
import AccountBtnBox from "../organism/AccountBtnbox";

const AccountTemplate = () =>{

    return (
        <>
        <Container>
          <CustomTitle>마음의 창</CustomTitle>
          <CustomText size="sm" color="darkgray">연동할 계정을 선택해주세요</CustomText>
          <AccountBtnBox/>
        </Container>
        </>
    )
}

export default AccountTemplate;