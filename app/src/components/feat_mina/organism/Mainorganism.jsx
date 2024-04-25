import React from 'react';
import { View } from "react-native";
import CustomTitle from '../../common/atom/CustomTitle';
import CustomText from "../../common/atom/CustomText";
import { styled } from 'nativewind';
import { scale } from "../../../utils/Scale";

const Body = styled(View)


const Mainorganism = () => {
    
    return (
       <Body className="w-full" style={{paddingLeft: scale(20)}}>
        {/* 메세지 값 서버에서 전달 받아서 출력 */}
        <CustomTitle color="pink">마음아</CustomTitle>
        <CustomText></CustomText>
       </Body>
    );
};

export default Mainorganism;
